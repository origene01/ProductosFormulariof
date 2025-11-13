import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listados-generico',
  imports: [],
  templateUrl: './listados-generico.component.html',
  styleUrl: './listados-generico.component.css'
})
export class ListadosGenericoComponent {
  @Input({required: true})
  listado!: any[]
  
}
