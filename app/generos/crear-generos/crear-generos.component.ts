import {
  Component,
  inject
} from '@angular/core';
import {
  Router,
  RouterLink
} from '@angular/router';
import {
  MatButton,
  MatAnchor
} from "@angular/material/button";
import {
  MatFormFieldModule
} from "@angular/material/form-field";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {
  MatInputModule
} from "@angular/material/input";
import {
  PrimeraLetraMayuscula
} from '../../compartidos/componentes/funciones/validaciones';
import { GeneroCreacionDTO } from '../generos';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";



@Component({
  selector: 'app-crear-generos',
  imports: [MatButton, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatAnchor, FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  private router = inject(Router);
  
  guardarCambios (genero: GeneroCreacionDTO){
// guardar los cambios
//this.router.navigate (['/generos']);
 console.log ('Creando el genero:' , genero);
}




}
