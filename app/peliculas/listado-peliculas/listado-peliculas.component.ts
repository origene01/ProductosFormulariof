import { CurrencyPipe, DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import {
  Component,
  Input,
  input,
  OnInit
} from '@angular/core';
import { findIndex } from 'rxjs';
import { ListadosGenericoComponent } from "../../compartidos/componentes/listados-generico/listados-generico.component";
import { ɵEmptyOutletComponent } from "@angular/router";
import{MatButtonModule} from "@angular/material/button";
import{MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-listado-peliculas',
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, NgFor, NgIf, ListadosGenericoComponent, ɵEmptyOutletComponent, MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent{


  @Input({required: true})
  peliculas!: any[];
  
  //Para agregar pelicula:
  /*
  agregarPelicula(){
    this.peliculas.push({
      titulo: 'Superman',
      fecha: new Date('2025-11-28'),
      precio: 1550.34,
      poster: ''
    },)
  }*/

  //Para remoder una pelicula:
  /*remover(pelicula: any){
    const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);
    this.peliculas.splice(indice,1 );
  }*/
}

