import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CanActivateFn, Router } from '@angular/router';
import { filter, map, take } from 'rxjs';

import { AuthService } from './auth.service';

/**
 * Espera a que Firebase resuelva el estado de auth inicial (`authReady`) antes de
 * decidir — si redirigiéramos apenas arranca la app, un refresh de página con sesión
 * válida te mandaría al login por una fracción de segundo de estado "no sé todavía".
 */
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return toObservable(authService.authReady).pipe(
    filter((ready) => ready),
    take(1),
    map(() => (authService.isAuthenticated() ? true : router.parseUrl('/login'))),
  );
};

/**
 * Guard inverso: redirecciona a /prospects si el usuario ya está autenticado.
 * Se usa en la ruta de login para evitar que usuarios autenticados vean el formulario.
 */
export const redirectIfAuthenticatedGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return toObservable(authService.authReady).pipe(
    filter((ready) => ready),
    take(1),
    map(() => (authService.isAuthenticated() ? router.parseUrl('/prospects') : true)),
  );
};
