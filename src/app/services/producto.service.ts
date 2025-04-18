import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto'; // Asegúrate de que esté bien la ruta

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private jsonUrl = 'assets/productos.json';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.jsonUrl);
  }
}