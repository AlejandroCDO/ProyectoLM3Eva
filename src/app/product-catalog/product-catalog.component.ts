// src/app/product-catalog/product-catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../interfaces/Producto';

@Component({
  selector: 'app-product-catalog',
  standalone: true,               // 💥
  imports: [CommonModule],         // para *ngFor, etc.
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => this.productos = data);
  }

  verMas(producto: Producto): void {
    alert(`📦 ${producto.nombre}\n\n${producto.descripcion}\n💵 $${producto.precio}`);
  }
}
