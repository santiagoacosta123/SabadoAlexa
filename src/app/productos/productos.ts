import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Categoria {
  id: number;
  nombre: string;
}

export interface Producto {
  id?: number;
  nombre: string;
  categorias: number[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private categorias: Categoria[] = [
    { id: 1, nombre: 'Alimentos' }
  ];

  private productos: Producto[] = [];
  private siguienteId = 1;

  obtenerCategorias(): Categoria[] {
    return this.categorias;
  }

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  crear(producto: Producto): void {
    producto.id = this.siguienteId;
    this.siguienteId = this.siguienteId + 1;
    this.productos.push(producto);
  }

  actualizar(id: number, datos: Producto): void {
    const indice = this.productos.findIndex(p => p.id === id);
    if (indice !== -1) {
      datos.id = id;
      this.productos[indice] = datos;
    }
  }

  eliminar(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {

  vista: 'lista' | 'formulario' | 'detalle' = 'lista';
  busqueda: string = '';
  categorias: Categoria[] = [];
  productos: Producto[] = [];
  producto: Producto = this.productoVacio();
  editandoId: number | null = null;
  productoDetalle: Producto | null = null;

  constructor(private productosService: ProductosService) {
    this.categorias = this.productosService.obtenerCategorias();
    this.productos = this.productosService.obtenerProductos();
  }

  productoVacio(): Producto {
    return {
      nombre: '',
      categorias: []
    };
  }

  get productosFiltrados(): Producto[] {
    const texto = this.busqueda.trim().toLowerCase();
    if (texto === '') {
      return this.productos;
    }
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(texto)
    );
  }

  nombresCategorias(idsCategorias: number[]): string {
    const nombres = this.categorias
      .filter(c => idsCategorias.includes(c.id))
      .map(c => c.nombre);
    return nombres.join(', ');
  }

  tieneCategoria(idCategoria: number): boolean {
    return this.producto.categorias.includes(idCategoria);
  }

  cambiarCategoria(idCategoria: number, marcado: boolean): void {
    if (marcado) {
      if (!this.producto.categorias.includes(idCategoria)) {
        this.producto.categorias.push(idCategoria);
      }
    } else {
      this.producto.categorias = this.producto.categorias.filter(
        id => id !== idCategoria
      );
    }
  }

  abrirCrear(): void {
    this.producto = this.productoVacio();
    this.editandoId = null;
    this.vista = 'formulario';
  }

  editar(producto: Producto): void {
    this.producto = {
      nombre: producto.nombre,
      categorias: [...producto.categorias]
    };
    this.editandoId = producto.id ?? null;
    this.vista = 'formulario';
  }

  guardar(): void {
    if (!this.producto.nombre.trim()) {
      alert('Escribí el nombre del producto.');
      return;
    }

    if (this.producto.categorias.length === 0) {
      alert('Elegí al menos una categoría.');
      return;
    }

    if (this.editandoId !== null) {
      this.productosService.actualizar(this.editandoId, this.producto);
    } else {
      this.productosService.crear(this.producto);
    }

    this.productos = this.productosService.obtenerProductos();
    this.volver();
  }

  verDetalle(producto: Producto): void {
    this.productoDetalle = producto;
    this.vista = 'detalle';
  }

  eliminar(producto: Producto): void {
    const confirmar = confirm('¿Seguro que querés eliminar "' + producto.nombre + '"?');
    if (confirmar && producto.id !== undefined) {
      this.productosService.eliminar(producto.id);
      this.productos = this.productosService.obtenerProductos();
    }
  }

  volver(): void {
    this.vista = 'lista';
    this.editandoId = null;
    this.productoDetalle = null;
  }
}