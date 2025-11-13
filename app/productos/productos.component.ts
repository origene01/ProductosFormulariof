import {
  Component,
  inject
} from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import {
  Router,
  RouterLink
} from '@angular/router';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  FormsModule
} from '@angular/forms';
import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);

  productos: any[] = [];
  editando = false;
  indiceEditando: number | null = null;

  form = this.formBuilder.group({
    Producto: [''],
    Precio: [''],
    Codigo: [''],
    Descripcion: [''],
    Estado: ['']
  });



  ngOnInit() {
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
      this.productos = JSON.parse(productosGuardados);
    }
  }

                guadarCambios() {
    const nuevoProducto = this.form.value;

    if (!nuevoProducto.Producto || !nuevoProducto.Precio) {
      alert('Llena los campos ');
      return;
    }

    if (this.editando && this.indiceEditando !== null) {
      // Edit
      this.productos[this.indiceEditando] = nuevoProducto;
      this.editando = false;
      this.indiceEditando = null;
    } else {
      // AgregaN
      this.productos.push(nuevoProducto);
    }


    localStorage.setItem('productos', JSON.stringify(this.productos));


    this.form.reset();

    console.log('producto agreado o actualizado:', nuevoProducto);
    console.log('lista actual:', this.productos);
                              }

  eliminarProducto(indice: number) {
    this.productos.splice(indice, 1);
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }

  borrarTodo() {
    this.productos = [];
    localStorage.removeItem('productos');
  }

  editarProducto(indice: number) {
    const producto = this.productos[indice];
    this.form.setValue({
      Producto: producto.Producto,
      Codigo: producto.Codigo,
      Descripcion: producto.Descripcion,
      Precio: producto.Precio,
      Estado: producto.Estado
    });
    this.editando = true;
    this.indiceEditando = indice;
  }
}
