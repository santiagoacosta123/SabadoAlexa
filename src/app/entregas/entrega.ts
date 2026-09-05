import { Injectable } from '@angular/core';

export interface Entrega {
  id: number;
  fecha: string;
  destino: string;
  productos: number;
  estado: 'Pendiente' | 'Completada' | 'Cancelada';
}

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  private entregas: Entrega[] = [
    {
      id: 1,
      fecha: '2026-08-25',
      destino: 'Institución Educativa La Paz',
      productos: 12,
      estado: 'Completada'
    },
    {
      id: 2,
      fecha: '2026-08-26',
      destino: 'Institución Educativa San José',
      productos: 10,
      estado: 'Completada'
    },
    {
      id: 3,
      fecha: '2026-08-27',
      destino: 'Institución Educativa Bello Horizonte',
      productos: 9,
      estado: 'Pendiente'
    }
  ];

  obtenerEntregas(): Entrega[] {
    return this.entregas;
  }

  obtenerEntrega(id: number): Entrega | undefined {
    return this.entregas.find(
      entrega => entrega.id === id
    );
  }

  crearEntrega(entrega: Entrega): void {
    this.entregas.push(entrega);
  }

  actualizarEntrega(entregaActualizada: Entrega): void {
    const indice = this.entregas.findIndex(
      entrega => entrega.id === entregaActualizada.id
    );

    if (indice !== -1) {
      this.entregas[indice] = entregaActualizada;
    }
  }

  eliminarEntrega(id: number): void {
    this.entregas = this.entregas.filter(
      entrega => entrega.id !== id
    );
  }
}