import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { CrearCategoria } from './crear-categoria/crear-categoria';
import { EditarCategoria } from './editar-categoria/editar-categoria';
import { GestionCategoria } from './gestion-categoria/gestion-categoria';
import { LoginComponent } from './login/login';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta';
import { CrearRoles } from './rol/crear-rol/crear-rol';
import { ListarRoles } from './rol/listar-rol/listar-rol';
import { Plantillas } from './plantillas/plantillas';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'crear-cuenta',
    component: CrearCuentaComponent
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
    path: 'plantillas',
    component: Plantillas
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
    path: 'rol',
    component: ListarRoles
  },
  {
    path: 'rol/crear',
    component: CrearRoles
  },
  {
    path: 'calendario',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    redirectTo: 'rol',
    pathMatch: 'full'
  },
  {
    path: 'reportes',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'sedes',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inventario',
    redirectTo: 'plantillas',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'categorias',
    redirectTo: 'gestion-categoria',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  },

];

