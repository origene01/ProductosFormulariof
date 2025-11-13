import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';
import { MatButton, MatAnchor } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-formulario-genero',
  imports: [MatButton, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatAnchor],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})


export class FormularioGeneroComponent implements  OnInit{
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }


@Input()
modelo?: GeneroDTO;

@Output()
posteroFormulario = new EventEmitter<GeneroCreacionDTO>();
  
private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3), PrimeraLetraMayuscula()]]
  })

  

  obtenerErrorNombre(): string {
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')) {
      return 'El campo nombre es requerido, digite su nombre completo por favor. Asegurate bien poner el nombre exactamente igual';
    }



    if (nombre.hasError('PrimeraLetraMayuscula')) {
      return nombre.getError('PrimeraLetraMayuscula').mensaje;

    }
    return '';

  }
  
  guardarCambios() {
    //procesamiento de datos aqui...
    //this.router.navigate(['/generos']);
    if(!this.form.valid){
      return;
    }

    const genero = this.form.value as GeneroCreacionDTO;
    this.posteroFormulario.emit(genero);

  }
}
