import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ProspectRepository } from '../../data/repositories/prospect.repository';
import { ConfigRepository } from '../../data/repositories/config.repository';
import { ProjectRepository } from '../../data/repositories/project.repository';
import { FollowupRepository } from '../../data/repositories/followup.repository';
import { Prospect } from '../../domain/models/prospect.model';
import { StatusConfig } from '../../domain/models/status.model';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { formatIsoDate } from '../../shared/utils/date-input.util';
import { projectBalance, projectPaidAmount, projectsOfExistingProspects } from '../../shared/utils/project-finance.util';

interface StatBar {
  label: string;
  color: string;
  count: number;
  percent: number;
}

/** Fila de los paneles de acción: cada una lleva a la ficha del cliente. */
interface DashboardRow {
  prospectId: string;
  client: string;
  title: string;
  date?: string;
  time?: string;
  amount?: number;
  overdue?: boolean;
}

const ROW_LIMIT = 5;

/**
 * Sin librería de gráficos externa a propósito: barras simples con CSS/inline-SVG
 * alcanzan para lo que pide el brief, y no suman una dependencia nueva sin
 * necesidad real. Si en algún momento hace falta algo más rico (series de tiempo,
 * tooltips interactivos), ahí sí vale la pena evaluar chart.js/ngx-charts.
 */
@Component({
  selector: 'app-dashboard',
  imports: [DatePipe, RouterLink, MatCardModule, MatIconModule, MoneyPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly prospectRepo = inject(ProspectRepository);
  private readonly configRepo = inject(ConfigRepository);
  private readonly projectRepo = inject(ProjectRepository);
  private readonly followupRepo = inject(FollowupRepository);

  private readonly prospects = toSignal(this.prospectRepo.watchAll(), { initialValue: [] as Prospect[] });
  private readonly statuses = toSignal(this.configRepo.watchStatuses(), { initialValue: [] as StatusConfig[] });
  private readonly projects = toSignal(this.projectRepo.watchAll(), { initialValue: [] });
  private readonly pendingFollowups = toSignal(this.followupRepo.watchAllPending(), { initialValue: [] });

  private readonly SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

  readonly totalProspects = computed(() => this.prospects().length);

  readonly contacted = computed(() => this.prospects().filter((p) => !!p.lastContactAt).length);

  readonly clients = computed(() => {
    const wonIds = new Set(this.statuses().filter((s) => s.isWon).map((s) => s.id));
    return this.prospects().filter((p) => wonIds.has(p.statusId)).length;
  });

  readonly lost = computed(() => {
    const lostIds = new Set(this.statuses().filter((s) => s.isLost).map((s) => s.id));
    return this.prospects().filter((p) => lostIds.has(p.statusId)).length;
  });

  readonly finalized = computed(() => {
    const finalIds = new Set(this.statuses().filter((s) => s.isFinal).map((s) => s.id));
    return this.prospects().filter((p) => finalIds.has(p.statusId)).length;
  });

  readonly newThisWeek = computed(() => {
    const threshold = Date.now() - this.SEVEN_DAYS_MS;
    return this.prospects().filter((p) => p.createdAt >= threshold).length;
  });

  readonly conversionRate = computed(() => {
    const total = this.totalProspects();
    return total === 0 ? 0 : Math.round((this.clients() / total) * 100);
  });

  readonly pendingFollowupsCount = computed(() => this.pendingFollowups().length);

  private readonly activeProjects = computed(() => projectsOfExistingProspects(this.projects(), this.prospects()));
  readonly income = computed(() => this.activeProjects().reduce((sum, p) => sum + projectPaidAmount(p), 0));
  readonly pendingIncome = computed(() => this.activeProjects().reduce((sum, p) => sum + projectBalance(p), 0));

  private readonly prospectNames = computed(() => new Map(this.prospects().map((p) => [p.id, p.name])));
  private readonly todayIso = computed(() => formatIsoDate(new Date()) ?? '');

  /** Seguimientos pendientes de clientes que existen, el más cercano primero (los vencidos arriba). */
  readonly upcomingFollowups = computed<DashboardRow[]>(() => {
    const names = this.prospectNames();
    const today = this.todayIso();
    return this.pendingFollowups()
      .filter((f) => names.has(f.prospectId))
      .sort((a, b) => `${a.date} ${a.time ?? ''}`.localeCompare(`${b.date} ${b.time ?? ''}`))
      .slice(0, ROW_LIMIT)
      .map((f) => ({
        prospectId: f.prospectId,
        client: names.get(f.prospectId)!,
        title: f.description,
        date: f.date,
        time: f.time,
        overdue: f.date < today,
      }));
  });

  /** Trabajos sin entregar que tienen fecha de entrega, el más próximo primero. */
  readonly jobsToDeliver = computed<DashboardRow[]>(() => {
    const names = this.prospectNames();
    const today = this.todayIso();
    return this.activeProjects()
      .filter((p) => p.status !== 'Entregado' && !!p.dueDate)
      .sort((a, b) => a.dueDate!.localeCompare(b.dueDate!))
      .slice(0, ROW_LIMIT)
      .map((p) => ({
        prospectId: p.prospectId,
        client: names.get(p.prospectId) ?? '',
        title: p.serviceName || 'Sin servicio',
        date: p.dueDate,
        overdue: p.dueDate! < today,
      }));
  });

  /** Trabajos con saldo por cobrar, el mayor primero. */
  readonly pendingPayments = computed<DashboardRow[]>(() => {
    const names = this.prospectNames();
    return this.activeProjects()
      .map((p) => ({ project: p, balance: projectBalance(p) }))
      .filter((x) => x.balance > 0)
      .sort((a, b) => b.balance - a.balance)
      .slice(0, ROW_LIMIT)
      .map(({ project, balance }) => ({
        prospectId: project.prospectId,
        client: names.get(project.prospectId) ?? '',
        title: project.serviceName || 'Sin servicio',
        amount: balance,
      }));
  });

  readonly statusBars = computed<StatBar[]>(() => {
    const prospects = this.prospects();
    const total = prospects.length || 1;
    const counts = new Map<string, number>();
    for (const p of prospects) counts.set(p.statusId, (counts.get(p.statusId) ?? 0) + 1);

    return this.statuses()
      .map((status) => ({
        label: status.label,
        color: status.color,
        count: counts.get(status.id) ?? 0,
        percent: Math.round(((counts.get(status.id) ?? 0) / total) * 100),
      }))
      .filter((bar) => bar.count > 0)
      .sort((a, b) => b.count - a.count);
  });
}
