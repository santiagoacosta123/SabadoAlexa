import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { CrearCategoria } from './crear-categoria/crear-categoria';
import { EditarCategoria } from './editar-categoria/editar-categoria';
import { GestionCategoria } from './gestion-categoria/gestion-categoria';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: Inicio
  },
  {
    path: 'productos',
    component: Productos
  },
  {
    path: 'crear-categoria',
    component: CrearCategoria
  },
  {
    path: 'editar-categoria',
    component: EditarCategoria
  },
  {
    path: 'gestion-categoria',
    component: GestionCategoria
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];