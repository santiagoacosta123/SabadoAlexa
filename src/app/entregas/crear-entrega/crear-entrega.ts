import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Entrega, EntregaService } from '../entrega';

@Component({
  selector: 'app-crear-entrega',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-entrega.html',
  styleUrl: './crear-entrega.css'
})
export class CrearEntrega {

  fecha = '';
  destino = '';
  productos = 1;

  estado: 'Pendiente' | 'Completada' | 'Cancelada' = 'Pendiente';

  constructor(
    private entregaService: EntregaService,
    private router: Router
  ) {}

  guardar(): void {

    if (!this.fecha || !this.destino || this.productos < 1) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const entregas = this.entregaService.obtenerEntregas();

    const nuevoId = entregas.length > 0
      ? Math.max(...entregas.map(e => e.id)) + 1
      : 1;

    const nuevaEntrega: Entrega = {
      id: nuevoId,
      fecha: this.fecha,
      destino: this.destino,
      productos: this.productos,
      estado: this.estado
    };

    this.entregaService.crearEntrega(nuevaEntrega);

    alert('Entrega creada correctamente.');

    this.router.navigate(['/entregas']);
  }

  cancelar(): void {
    this.router.navigate(['/entregas']);
  }
}