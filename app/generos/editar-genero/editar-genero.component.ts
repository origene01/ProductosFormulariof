import { Component, Input, numberAttribute } from '@angular/core';
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-editar-genero',
  imports: [MatError, MatFormField, MatLabel, FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  @Input({transform: numberAttribute})
  id!: number;
form: any;

 genero: GeneroDTO = {id: 1, nombre: 'Comedia'};

 guardarCambios(genero: GeneroCreacionDTO){
  console.log('Editando el genero:', genero);
}
}
