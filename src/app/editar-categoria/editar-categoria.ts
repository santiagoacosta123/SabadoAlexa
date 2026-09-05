import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { CategoriaService } from '../services/categoria';


@Component({

  selector: 'app-editar-categoria',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './editar-categoria.html'

})


export class EditarCategoria {


  categoria = {

    id: 0,

    nombre: '',

    descripcion: '',

    estado: 'Activo',

    fecha: '',

    seleccionada: false

  };


  constructor(

    private router: Router,

    private categoriaService: CategoriaService

  ) {


    const categoriaRecibida = history.state.categoria;


    if (categoriaRecibida) {

      this.categoria = {

        ...categoriaRecibida

      };

    }

  }


  actualizarCategoria() {


    if (

      !this.categoria.nombre.trim() ||

      !this.categoria.descripcion.trim()

    ) {


      Swal.fire({

        icon: 'warning',

        title: 'Campos incompletos',

        text: 'Por favor complete todos los campos obligatorios.',

        confirmButtonColor: '#F4B41F'

      });


      return;

    }


    Swal.fire({

      title: '¿Actualizar categoría?',

      text: 'Los cambios realizados se guardarán.',

      icon: 'question',

      showCancelButton: true,

      confirmButtonColor: '#F4B41F',

      cancelButtonColor: '#777777',

      confirmButtonText: 'Sí, actualizar',

      cancelButtonText: 'Cancelar'

    }).then((resultado) => {


      if (resultado.isConfirmed) {


        const categoriaActualizada = {

          nombre: this.categoria.nombre.trim(),

          descripcion: this.categoria.descripcion.trim(),

          estado: this.categoria.estado

        };


        this.categoriaService

          .actualizarCategoria(

            this.categoria.id,

            categoriaActualizada

          )

          .subscribe({

            next: () => {


              Swal.fire({

                icon: 'success',

                title: 'Categoría actualizada',

                text: 'La categoría se actualizó correctamente.',

                confirmButtonColor: '#F4B41F'

              }).then(() => {


                this.router.navigate([

                  '/gestion-categoria'

                ]);

              });


            },


            error: () => {


              Swal.fire({

                icon: 'error',

                title: 'Error',

                text: 'No se pudo actualizar la categoría.',

                confirmButtonColor: '#F4B41F'

              });


            }

          });

      }

    });

  }


  cancelar() {


    Swal.fire({

      title: '¿Cancelar edición?',

      text: 'Los cambios realizados no se guardarán.',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonColor: '#E53935',

      cancelButtonColor: '#777777',

      confirmButtonText: 'Sí, cancelar',

      cancelButtonText: 'Continuar editando'

    }).then((resultado) => {


      if (resultado.isConfirmed) {


        this.router.navigate([

          '/gestion-categoria'

        ]);

      }

    });

  }

}