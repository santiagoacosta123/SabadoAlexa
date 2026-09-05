import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { CategoriaService } from '../services/categoria';


@Component({

  selector: 'app-gestion-categoria',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './gestion-categoria.html'

})


export class GestionCategoria {


  categorias: any[] = [];

  categoriasFiltradas: any[] = [];

  textoBusqueda = '';

  estadoSeleccionado = 'Todos';

  seleccionarTodas = false;


  constructor(

    private router: Router,

    private categoriaService: CategoriaService

  ) {

    this.cargarCategorias();

  }


  cargarCategorias() {

    this.categoriaService.listarCategorias().subscribe({

      next: (respuesta: any) => {

        this.categorias = respuesta.map((categoria: any) => ({

          ...categoria,

          seleccionada: false

        }));

        this.categoriasFiltradas = [...this.categorias];

      },

      error: () => {

        Swal.fire({

          icon: 'error',

          title: 'Error',

          text: 'No se pudieron cargar las categorías.',

          confirmButtonColor: '#F4B41F'

        });

      }

    });

  }


  irCrearCategoria() {

    this.router.navigate([

      '/crear-categoria'

    ]);

  }


  buscarCategoria() {

    this.aplicarFiltros();

  }


  filtrarEstado() {

    this.aplicarFiltros();

  }


  aplicarFiltros() {

    const texto =

      this.textoBusqueda

        .toLowerCase()

        .trim();


    this.categoriasFiltradas =

      this.categorias.filter(categoria => {


        const coincideNombre =

          categoria.nombre

            .toLowerCase()

            .includes(texto);


        const coincideDescripcion =

          categoria.descripcion

            .toLowerCase()

            .includes(texto);


        const coincideEstado =

          this.estadoSeleccionado === 'Todos' ||

          categoria.estado === this.estadoSeleccionado;


        return (

          (coincideNombre || coincideDescripcion) &&

          coincideEstado

        );

      });

  }


  cambiarSeleccionTodas() {

    this.categoriasFiltradas.forEach(categoria => {

      categoria.seleccionada =

        this.seleccionarTodas;

    });

  }


  actualizar() {

    this.cargarCategorias();

    this.seleccionarTodas = false;

  }


  verCategoria(categoria: any) {

    Swal.fire({

      title: categoria.nombre,

      html: `

        <div style="text-align: left">

          <p><b>ID:</b> ${categoria.id}</p>

          <p><b>Descripción:</b> ${categoria.descripcion}</p>

          <p><b>Estado:</b> ${categoria.estado}</p>

          <p><b>Fecha:</b> ${categoria.fecha}</p>

        </div>

      `,

      icon: 'info',

      confirmButtonColor: '#F4B41F',

      confirmButtonText: 'Cerrar'

    });

  }


  editarCategoria(categoria: any) {

    this.router.navigate(

      ['/editar-categoria'],

      {

        state: {

          categoria: categoria

        }

      }

    );

  }


  eliminarCategoria(categoria: any) {

    Swal.fire({

      title: '¿Eliminar categoría?',

      text:

        '¿Está seguro de eliminar "' +

        categoria.nombre +

        '"?',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonColor: '#E53935',

      cancelButtonColor: '#777777',

      confirmButtonText: 'Sí, eliminar',

      cancelButtonText: 'Cancelar'

    }).then((resultado) => {


      if (resultado.isConfirmed) {


        this.categoriaService

          .eliminarCategoria(categoria.id)

          .subscribe({

            next: () => {

              this.categorias =

                this.categorias.filter(

                  item => item.id !== categoria.id

                );


              this.aplicarFiltros();


              Swal.fire({

                icon: 'success',

                title: 'Categoría eliminada',

                text:

                  'La categoría se eliminó correctamente.',

                confirmButtonColor: '#F4B41F'

              });

            },

            error: () => {

              Swal.fire({

                icon: 'error',

                title: 'Error',

                text:

                  'No se pudo eliminar la categoría.',

                confirmButtonColor: '#F4B41F'

              });

            }

          });

      }

    });

  }

}