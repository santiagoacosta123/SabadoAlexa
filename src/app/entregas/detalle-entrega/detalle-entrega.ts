import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrega, EntregaService } from '../entrega';

@Component({
  selector: 'app-detalle-entrega',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './detalle-entrega.html',
  styleUrl: './detalle-entrega.css'
})
export class DetalleEntrega implements OnInit {

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

    this.entrega =
      this.entregaService.obtenerEntrega(id);

    if (!this.entrega) {
      alert('Entrega no encontrada.');
      this.router.navigate(['/entregas']);
    }
  }

  volver(): void {
    this.router.navigate(['/entregas']);
  }

  editar(): void {

    if (this.entrega) {

      this.router.navigate([
        '/entregas/editar',
        this.entrega.id
      ]);

    }
  }
}