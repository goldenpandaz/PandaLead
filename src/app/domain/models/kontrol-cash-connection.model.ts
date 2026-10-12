/**
 * Conexión con Kontrol Cash. Vive en `/tenants/{uid}/integrations/kontrolCash`.
 * El token es la "llave" que se pega en Kontrol Cash; con él esa app lee los
 * ingresos publicados en `/kontrolLinks/{token}`.
 */
export interface KontrolCashConnection {
  id: string;
  token: string;
  /** Interruptor de la conexión: apagado, PandaLead deja de publicar (el token se conserva). Ausente = encendido. */
  enabled?: boolean;
}

/**
 * Lo que Kontrol Cash deja escrito en `/kontrolLinks/{token}` para avisar que usa el
 * token: `kontrolConnectedAt` cuando lo pegó y guardó (se borra al desconectar),
 * `kontrolLastSyncAt` en cada sincronización (epoch en milisegundos) y
 * `kontrolEnabled` con su propio interruptor.
 */
export interface KontrolLinkState {
  kontrolConnectedAt?: number;
  kontrolLastSyncAt?: number;
  /** `false` cuando el usuario apagó la sincronización desde Kontrol Cash; ausente o `true` = encendida. */
  kontrolEnabled?: boolean;
}
