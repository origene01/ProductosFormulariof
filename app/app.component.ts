import {
  CurrencyPipe,
  DatePipe,
  UpperCasePipe,
  NgForOf,
  NgFor,
  NgOptimizedImage,
  NgIf,
  NgStyle
} from '@angular/common';
import {
  Component,
  input,
  OnInit
} from '@angular/core';
import {
  RouterOutlet
} from '@angular/router';
import {
  ListadoPeliculasComponent
} from "./peliculas/listado-peliculas/listado-peliculas.component";
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage, NgIf, NgStyle, ListadoPeliculasComponent, MenuComponent, RatingComponent, MatButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
