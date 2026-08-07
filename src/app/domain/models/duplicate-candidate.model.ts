/**
 * Resultado del motor de deduplicación (.docs/architecture.md §10). Nunca bloquea
 * automáticamente — solo informa para que el usuario decida ver/actualizar/crear.
 */
export interface DuplicateCandidate {
  prospectId: string;
  matchedFields: string[];
  /** 0 a 100. Match exacto (teléfono, email, etc.) siempre es 100. */
  similarityScore: number;
}
