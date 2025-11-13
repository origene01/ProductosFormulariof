import { Component, Input, numberAttribute } from '@angular/core';
import { ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
@Input({transform: numberAttribute})
  id!: number;

  actor: ActorDTO = {
    id: 1, nombre: 'Actor de prueba', fechaNacimiento: new Date('1990-01-01'),
    foto: '',
    biografia: ''
  }

  guardarCambios(actor: ActorDTO) {
    console.log('actualizando el actor', this.id, actor);
  }
  
}

