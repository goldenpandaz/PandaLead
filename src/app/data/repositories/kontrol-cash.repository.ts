import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { KontrolCashConnection, KontrolLinkState } from '../../domain/models/kontrol-cash-connection.model';
import { BaseRepository } from './base.repository';

const INTEGRATIONS = 'integrations';
const KONTROL_CASH_ID = 'kontrolCash';
const LINKS = 'kontrolLinks';

/** Datos que Kontrol Cash lee a través del token. */
export interface KontrolLinkPayload {
  incomeByMonth: Record<string, number>;
  /** Nombre del perfil: Kontrol Cash lo usa como nombre de la fila de ingresos y lo mantiene al día. */
  displayName?: string;
}

/**
 * Dos cosas distintas:
 * - la conexión del tenant (`tenants/{uid}/integrations/kontrolCash`, privada), que guarda el token;
 * - el nodo público `kontrolLinks/{token}`, que solo se puede leer conociendo el token
 *   (las reglas no permiten listar) y solo escribe su dueño.
 */
@Injectable({ providedIn: 'root' })
export class KontrolCashRepository extends BaseRepository {
  watchConnection(): Observable<KontrolCashConnection | null> {
    return this.sync
      .watchCollection<KontrolCashConnection>(INTEGRATIONS, this.tenantPath(INTEGRATIONS))
      .pipe(map((items) => items.find((item) => item.id === KONTROL_CASH_ID) ?? null));
  }

  /** Estado que escribe Kontrol Cash sobre el token (null si el nodo todavía no existe). */
  watchLink(token: string): Observable<KontrolLinkState | null> {
    return this.sync.watchDoc<KontrolLinkState>(LINKS, token, `${LINKS}/${token}`);
  }

  /** `update` y no `set`, para no pisar el interruptor `enabled`. */
  async saveToken(token: string): Promise<void> {
    await this.sync.write(INTEGRATIONS, KONTROL_CASH_ID, this.tenantPath(INTEGRATIONS, KONTROL_CASH_ID), 'update', {
      id: KONTROL_CASH_ID,
      token,
    });
  }

  async setEnabled(enabled: boolean): Promise<void> {
    await this.sync.write(INTEGRATIONS, KONTROL_CASH_ID, this.tenantPath(INTEGRATIONS, KONTROL_CASH_ID), 'update', { enabled });
  }

  async clearToken(): Promise<void> {
    await this.sync.write(INTEGRATIONS, KONTROL_CASH_ID, this.tenantPath(INTEGRATIONS, KONTROL_CASH_ID), 'remove');
  }

  async publish(token: string, payload: KontrolLinkPayload): Promise<void> {
    await this.sync.write(LINKS, token, `${LINKS}/${token}`, 'update', {
      ownerUid: this.uid,
      incomeByMonth: payload.incomeByMonth,
      displayName: payload.displayName,
      incomeUpdatedAt: Date.now(),
      paused: false,
    });
  }

  /** Conexión apagada: el nodo y el token siguen vivos, pero se avisa `paused` y se congelan los datos. */
  async pause(token: string): Promise<void> {
    await this.sync.write(LINKS, token, `${LINKS}/${token}`, 'update', { ownerUid: this.uid, paused: true });
  }

  async unpublish(token: string): Promise<void> {
    await this.sync.write(LINKS, token, `${LINKS}/${token}`, 'remove');
  }
}
