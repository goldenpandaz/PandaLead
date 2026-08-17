import { Routes } from '@angular/router';

import { authGuard, redirectIfAuthenticatedGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [redirectIfAuthenticatedGuard],
    loadComponent: () => import('./features/auth/login/login').then((m) => m.Login),
  },
  {
    path: 'prospects',
    canActivate: [authGuard],
    loadComponent: () => import('./features/prospects/prospects-list/prospects-list').then((m) => m.ProspectsList),
  },
  {
    path: 'prospects/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./features/prospects/prospect-detail/prospect-detail').then((m) => m.ProspectDetail),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'settings',
    canActivate: [authGuard],
    loadComponent: () => import('./features/settings/settings').then((m) => m.Settings),
  },
  { path: '', pathMatch: 'full', redirectTo: 'prospects' },
  { path: '**', redirectTo: 'prospects' },
];
