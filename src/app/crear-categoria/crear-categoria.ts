import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { CategoriaService } from '../services/categoria';


@Component({

  selector: 'app-crear-categoria',

  standalone: true,

  imports: [FormsModule],

  templateUrl: './crear-categoria.html'

})


export class CrearCategoria {


  nombre = '';

  descripcion = '';

  estado = 'Activo';


  constructor(

    private router: Router,

    private categoriaService: CategoriaService

  ) {}


  irCrearCategoria() {

    this.router.navigate([

      '/crear-categoria'

    ]);

  }


  crearCategoria() {


    if (

      !this.nombre.trim() ||

      !this.descripcion.trim()

    ) {

      Swal.fire({

        icon: 'warning',

        title: 'Campos incompletos',

        text: 'Por favor complete todos los campos obligatorios.',

        confirmButtonColor: '#F4B41F'

      });

      return;

    }


    const nuevaCategoria = {

      nombre: this.nombre.trim(),

      descripcion: this.descripcion.trim(),

      estado: this.estado

    };


    this.categoriaService

      .crearCategoria(nuevaCategoria)

      .subscribe({

        next: () => {


          Swal.fire({

            icon: 'success',

            title: 'Categoría creada',

            text: 'La categoría se creó correctamente.',

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

            text: 'No se pudo crear la categoría.',

            confirmButtonColor: '#F4B41F'

          });


        }

      });

  }


  cancelar() {


    Swal.fire({

      title: '¿Cancelar?',

      text: 'Los datos que ingresó no se guardarán.',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonColor: '#E53935',

      cancelButtonColor: '#777777',

      confirmButtonText: 'Sí, cancelar',

      cancelButtonText: 'Continuar'

    }).then((resultado) => {


      if (resultado.isConfirmed) {

        this.router.navigate([

          '/gestion-categoria'

        ]);

      }

    });

  }

}