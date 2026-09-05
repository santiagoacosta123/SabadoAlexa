import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'gestion-categoria',
    pathMatch: 'full'
  },

  {
    path: 'gestion-categoria',
    loadComponent: () =>
      import('./gestion-categoria/gestion-categoria')
        .then(
          m => m.GestionCategoria
        )
  },

  {
    path: 'crear-categoria',
    loadComponent: () =>
      import('./crear-categoria/crear-categoria')
        .then(
          m => m.CrearCategoria
        )
  },

  {
    path: 'editar-categoria',
    loadComponent: () =>
      import('./editar-categoria/editar-categoria')
        .then(
          m => m.EditarCategoria
        )
  }

];
