import { InjectionToken } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Database } from 'firebase/database';

/**
 * Tokens de las instancias del SDK nativo de Firebase. Ningún servicio/componente
 * fuera de `core/firebase` y `data/repositories` debería inyectar estos tokens
 * directamente — la capa `data/` es la única que habla con Firebase.
 * Ver .docs/architecture.md §3.
 *
 * Sin token de Storage a propósito: el proyecto no sube archivos, ver
 * `data/repositories/capture.repository.ts` y .docs/architecture.md §9.
 */
export const FIREBASE_APP = new InjectionToken<FirebaseApp>('FIREBASE_APP');
export const FIREBASE_AUTH = new InjectionToken<Auth>('FIREBASE_AUTH');
export const FIREBASE_DATABASE = new InjectionToken<Database>('FIREBASE_DATABASE');
