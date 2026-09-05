import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Entrega, EntregaService } from '../entrega';

@Component({
  selector: 'app-lista-entregas',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './lista-entregas.html',
  styleUrl: './lista-entregas.css'
})
export class ListaEntregas implements OnInit {

  entregas: Entrega[] = [];
  entregasFiltradas: Entrega[] = [];

  filtroActual = 'Todos';

  constructor(
    private entregaService: EntregaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarEntregas();
  }

  cargarEntregas(): void {
    this.entregas = this.entregaService.obtenerEntregas();
    this.filtrarEntregas();
  }

  filtrarEntregas(): void {

    if (this.filtroActual === 'Todos') {
      this.entregasFiltradas = [...this.entregas];
      return;
    }

    this.entregasFiltradas = this.entregas.filter(
      entrega => entrega.estado === this.filtroActual
    );
  }

  cambiarFiltro(filtro: string): void {
    this.filtroActual = filtro;
    this.filtrarEntregas();
  }

  nuevaEntrega(): void {
    this.router.navigate(['/entregas/crear']);
  }

  verEntrega(id: number): void {
    this.router.navigate(['/entregas/detalle', id]);
  }

  editarEntrega(id: number): void {
    this.router.navigate(['/entregas/editar', id]);
  }

  eliminarEntrega(id: number): void {
    this.router.navigate(['/entregas/eliminar', id]);
  }
}