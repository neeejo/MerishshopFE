import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',  // Modifica qui: da 'gestionale' a 'login'
        pathMatch: 'full',
      },
      {
        path: 'gestionale',
        loadChildren: () =>
          import('./modules/app-layout/app-layout-routing').then(
            (m) => m.routes
          ),
      },
      {
        path: 'prova',
        loadChildren: () =>
          import('./modules/prova/prova-routing').then(
            (m) => m.routes
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/login/login-routing').then((m) => m.routes),
      },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
