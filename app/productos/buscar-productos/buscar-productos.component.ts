import { Component, OnInit } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import {
  Router,
  RouterLink
} from '@angular/router';

import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar-productos',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './buscar-productos.component.html',
  styleUrl: './buscar-productos.component.css'
})

export class BuscarProductosComponent implements OnInit {
 productos: any[] = [];
  productosFiltrados: any[] = [];
  textoBusqueda: string = '';
  busquedaRealizada: boolean = false;

  ngOnInit() {
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
      this.productos = JSON.parse(productosGuardados);
    }
  }

  buscarProducto() {
    this.busquedaRealizada = true;
    const texto = this.textoBusqueda.trim().toLowerCase();

    if (texto === '') {
      this.productosFiltrados = [];
      return;
    }

    this.productosFiltrados = this.productos.filter(
      (p) =>
        p.Producto?.toLowerCase().includes(texto) ||
        p.Codigo?.toLowerCase().includes(texto)
    );
  }
}