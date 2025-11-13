import {
  Component
} from '@angular/core';
import {
  FormularioActoresComponent
} from "../formulario-actores/formulario-actores.component";

interface ActorCreacionDTO {
  nombre?: string;
  fechaNacimiento?: Date;
  foto?: any;
}

@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  guardarCambios(actor: ActorCreacionDTO) {
    console.log('creando el actor', actor);
  }
}
