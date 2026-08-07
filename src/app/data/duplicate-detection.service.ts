import { Injectable } from '@angular/core';

import { DuplicateCandidate } from '../domain/models/duplicate-candidate.model';
import { Prospect } from '../domain/models/prospect.model';
import { normalizeDomain, normalizePhone } from '../shared/utils/normalize.util';
import { similarity } from '../shared/utils/similarity.util';

const FUZZY_THRESHOLD = 70;

/**
 * Nunca bloquea automáticamente — solo informa candidatos con su % de similitud
 * para que el usuario decida (ver existente / actualizar / crear nuevo).
 * Ver .docs/architecture.md §10.
 *
 * Simplificación deliberada respecto al diseño original con nodos `indexBy*` en
 * RTDB: compara contra la lista de prospectos ya cargada en memoria (el mismo
 * array que usa la tabla principal) en vez de mantener índices de lookup
 * separados. A la escala de un CRM personal (cientos/miles de prospectos, no
 * millones) el costo de un recorrido en cliente es insignificante, y evita
 * todo el riesgo de índices que quedan desincronizados si una escritura falla
 * a mitad de camino estando offline. Si el volumen crece mucho (futuro SaaS
 * multi-tenant), ahí sí vale la pena reintroducir los índices — no antes.
 */
@Injectable({ providedIn: 'root' })
export class DuplicateDetectionService {
  check(candidate: Partial<Prospect>, existing: readonly Prospect[]): DuplicateCandidate[] {
    const results = new Map<string, DuplicateCandidate>();

    const markExact = (prospect: Prospect, field: string): void => {
      const current = results.get(prospect.id);
      if (current) {
        if (!current.matchedFields.includes(field)) current.matchedFields.push(field);
        current.similarityScore = 100;
      } else {
        results.set(prospect.id, { prospectId: prospect.id, matchedFields: [field], similarityScore: 100 });
      }
    };

    const candidatePhone = candidate.phone ? normalizePhone(candidate.phone) : undefined;
    const candidateEmail = candidate.email?.toLowerCase();
    const candidateInstagram = candidate.instagram?.toLowerCase();
    const candidateFacebook = candidate.facebook?.toLowerCase();
    const candidateWebsite = candidate.website ? normalizeDomain(candidate.website) : undefined;

    for (const prospect of existing) {
      if (candidatePhone && prospect.phone && normalizePhone(prospect.phone) === candidatePhone) markExact(prospect, 'phone');
      if (candidateEmail && prospect.email?.toLowerCase() === candidateEmail) markExact(prospect, 'email');
      if (candidateInstagram && prospect.instagram?.toLowerCase() === candidateInstagram) markExact(prospect, 'instagram');
      if (candidateFacebook && prospect.facebook?.toLowerCase() === candidateFacebook) markExact(prospect, 'facebook');
      if (candidateWebsite && prospect.website && normalizeDomain(prospect.website) === candidateWebsite) {
        markExact(prospect, 'website');
      }
      if (
        candidate.locality &&
        prospect.locality &&
        candidate.locality.trim().toLowerCase() === prospect.locality.trim().toLowerCase()
      ) {
        markExact(prospect, 'locality');
      }
    }

    // Fuzzy por nombre — solo si no hubo ya un match exacto (el exacto ya es 100).
    if (candidate.normalizedName) {
      for (const prospect of existing) {
        if (results.has(prospect.id)) continue;
        const score = similarity(candidate.normalizedName, prospect.normalizedName);
        if (score >= FUZZY_THRESHOLD) {
          results.set(prospect.id, { prospectId: prospect.id, matchedFields: ['name'], similarityScore: score });
        }
      }
    }

    return Array.from(results.values()).sort((a, b) => b.similarityScore - a.similarityScore);
  }
}
