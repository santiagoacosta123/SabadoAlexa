import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://127.0.0.1:8000/api/categorias/';

  constructor(private http: HttpClient) {}

  listarCategorias() {
    return this.http.get(this.apiUrl);
  }

  crearCategoria(categoria: any) {
    return this.http.post(this.apiUrl, categoria);
  }

  actualizarCategoria(id: number, categoria: any) {
    return this.http.put(`${this.apiUrl}${id}/`, categoria);
  }

  eliminarCategoria(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

}