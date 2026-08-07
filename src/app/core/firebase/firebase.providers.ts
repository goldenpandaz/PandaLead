import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

import { environment } from '../../../environments/environment';
import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DATABASE } from './firebase.tokens';

/**
 * Inicializa el SDK nativo de Firebase (Auth, Realtime Database) una sola vez y
 * lo expone vía DI. Se usa el SDK nativo (no REST vía HttpClient, como hacía
 * miCartera) porque es lo que permite el cache en memoria + reconexión
 * automática que necesita el `SyncEngine` (.docs/architecture.md §7).
 *
 * Sin Storage: el proyecto no sube archivos — la imagen de una captura es un
 * insumo transitorio (solo vive en memoria del navegador mientras corre el
 * OCR), nunca se persiste. Ver .docs/architecture.md §9.
 */
export function provideFirebase(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: FIREBASE_APP,
      useFactory: () => initializeApp(environment.firebase),
    },
    {
      provide: FIREBASE_AUTH,
      useFactory: (app: FirebaseApp) => getAuth(app),
      deps: [FIREBASE_APP],
    },
    {
      provide: FIREBASE_DATABASE,
      useFactory: (app: FirebaseApp) => getDatabase(app),
      deps: [FIREBASE_APP],
    },
  ]);
}
