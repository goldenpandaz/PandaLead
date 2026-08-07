/** Vive en `/tenants/{uid}/notes/{prospectId}/{noteId}`. */
export interface Note {
  id: string;
  prospectId: string;
  text: string;
  authorId: string;
  createdAt: number;
  updatedAt?: number;
}
