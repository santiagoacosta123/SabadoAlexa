import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrega, EntregaService } from '../entrega';

@Component({
  selector: 'app-editar-entrega',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-entrega.html',
  styleUrl: './editar-entrega.css'
})
export class EditarEntrega implements OnInit {

  entrega: Entrega = {
    id: 0,
    fecha: '',
    destino: '',
    productos: 1,
    estado: 'Pendiente'
  };

  constructor(
    private route: ActivatedRoute,
    private entregaService: EntregaService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    const entregaEncontrada =
      this.entregaService.obtenerEntrega(id);

    if (entregaEncontrada) {

      this.entrega = {
        ...entregaEncontrada
      };

    } else {

      alert('Entrega no encontrada.');

      this.router.navigate(['/entregas']);
    }
  }

  guardar(): void {

    if (
      !this.entrega.fecha ||
      !this.entrega.destino ||
      this.entrega.productos < 1
    ) {

      alert('Por favor completa todos los campos.');

      return;
    }

    this.entregaService.actualizarEntrega(
      this.entrega
    );

    alert('Entrega actualizada correctamente.');

    this.router.navigate(['/entregas']);
  }

  cancelar(): void {
    this.router.navigate(['/entregas']);
  }
}