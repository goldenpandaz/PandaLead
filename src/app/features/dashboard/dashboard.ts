import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ProspectRepository } from '../../data/repositories/prospect.repository';
import { ConfigRepository } from '../../data/repositories/config.repository';
import { ProjectRepository } from '../../data/repositories/project.repository';
import { FollowupRepository } from '../../data/repositories/followup.repository';
import { Prospect } from '../../domain/models/prospect.model';
import { StatusConfig } from '../../domain/models/status.model';
import { MoneyPipe } from '../../shared/pipes/money.pipe';

interface StatBar {
  label: string;
  color: string;
  count: number;
  percent: number;
}

/**
 * Sin librería de gráficos externa a propósito: barras simples con CSS/inline-SVG
 * alcanzan para lo que pide el brief, y no suman una dependencia nueva sin
 * necesidad real. Si en algún momento hace falta algo más rico (series de tiempo,
 * tooltips interactivos), ahí sí vale la pena evaluar chart.js/ngx-charts.
 */
@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatIconModule, MoneyPipe],
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

  readonly income = computed(() => this.projects().reduce((sum, p) => sum + (p.deposit ?? 0), 0));
  readonly pendingIncome = computed(() => this.projects().reduce((sum, p) => sum + (p.balance ?? 0), 0));

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
