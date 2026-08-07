import { Injectable, Signal, inject, signal } from '@angular/core';
import { onValue, ref } from 'firebase/database';

import { FIREBASE_DATABASE } from '../firebase/firebase.tokens';

/**
 * `navigator.onLine` solo dice si hay una interfaz de red activa (podés estar
 * "conectado" a un wifi sin salida real a internet) — no alcanza para decidir si
 * hay que sincronizar. El nodo especial `.info/connected` de RTDB sí refleja una
 * conexión real y viva con los servidores de Firebase, así que es la señal
 * primaria; `navigator.onLine` se usa solo para reaccionar rápido a una
 * desconexión evidente (apagar wifi) mientras RTDB todavía no hizo timeout.
 * Ver .docs/architecture.md §7.
 */
@Injectable({ providedIn: 'root' })
export class ConnectivityService {
  private readonly database = inject(FIREBASE_DATABASE);

  private readonly onlineSignal = signal(navigator.onLine);
  readonly isOnline: Signal<boolean> = this.onlineSignal.asReadonly();

  constructor() {
    // "offline" del browser es una señal rápida y confiable de que no hay red —
    // la usamos para reaccionar antes de que RTDB llegue a hacer timeout.
    window.addEventListener('offline', () => this.onlineSignal.set(false));

    // Para pasar a "online" confiamos únicamente en RTDB: es la única señal que
    // confirma una conexión real con los servidores, no solo una interfaz de red activa.
    onValue(ref(this.database, '.info/connected'), (snapshot) => {
      this.onlineSignal.set(snapshot.val() === true);
    });
  }
}
