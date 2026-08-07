/** Vive en `/tenants/{uid}/followups/{prospectId}/{followupId}`. */
export interface Followup {
  id: string;
  prospectId: string;
  date: string;
  time?: string;
  description: string;
  status: 'pending' | 'done';
}
