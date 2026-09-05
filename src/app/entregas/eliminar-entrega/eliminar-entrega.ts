import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrega, EntregaService } from '../entrega';

@Component({
  selector: 'app-eliminar-entrega',
  standalone: true,
  templateUrl: './eliminar-entrega.html',
  styleUrl: './eliminar-entrega.css'
})
export class EliminarEntrega implements OnInit {

  entrega?: Entrega;

  constructor(
    private route: ActivatedRoute,
    private entregaService: EntregaService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.entrega = this.entregaService.obtenerEntrega(id);

    if (!this.entrega) {
      alert('Entrega no encontrada.');
      this.router.navigate(['/entregas']);
    }
  }

  eliminar(): void {

    if (!this.entrega) {
      return;
    }

    this.entregaService.eliminarEntrega(
      this.entrega.id
    );

    alert('Entrega eliminada correctamente.');

    this.router.navigate(['/entregas']);
  }

  cancelar(): void {
    this.router.navigate(['/entregas']);
  }
}