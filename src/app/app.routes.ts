import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'synopsis/:id',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/synopsis/synopsis.component').then(
        (m) => m.SynopsisComponent
      ),
  },
];
