import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";
import { RatingComponent } from "../compartidos/componentes/rating/rating.component";

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent, RatingComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  
  ngOnInit(): void {


    setTimeout(() => {
      this.peliculasEnCines = [{

          titulo: 'Free Guy',
          fecha: new Date(),
          precio: 1350.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Free_Guy_2021_Poster.jpg'
        },

        {
          titulo: 'Bad Boys',
          fecha: new Date(),
          precio: 1800.99,
          poster: 'https://i.ytimg.com/vi/LOZqqEXURzg/maxresdefault.jpg'
        },

        {
          titulo: 'The Origen',
          fecha: new Date(),
          precio: 2500.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg'
        },
      ]


      this.peliculasProximosExtrenos = [{
          titulo: 'Oppenheimer',
          fecha: new Date(),
          precio: 2000.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg'
        },

        {
          titulo: 'John Wick 4 ',
          fecha: new Date(),
          precio: 2500.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/d/d0/John_Wick_-_Chapter_4_promotional_poster.jpg'
        },

        {
          titulo: 'Pobres Criaturas',
          fecha: new Date(),
          precio: 1800.99,
          poster: 'https://www.posterscine.com/media/catalog/product/cache/1c91d037a1f0ef180108abb0973795cc/p/o/pobres_criaturas_posters_1.png'
        },

        {
          titulo: 'Spider-Man 2',
          fecha: new Date(),
          precio: 800.99,
          poster: 'https://www.posterscine.com/media/catalog/product/cache/1c91d037a1f0ef180108abb0973795cc/s/p/spiderman_2_poster.png'
        },
      ]

    }, 400);

  }


  title = 'angular-peliculas';
  peliculasProximosExtrenos!: any[];
  peliculasEnCines!: any[];
}
