import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/MovieService';
import { Search } from 'src/app/interfaces/movie-interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  pelicula: string = '';
  list: Search[] = [];

  constructor(private movieService : MovieService) {
  }


  // Métodos

  buscar () {
    this.getPeliculaByName(this.pelicula);
  }

  private getPeliculaByName(nombre: string){
    this.movieService.searchMovie(nombre,1)
      .then(
        (response: any) => {
          if(response.Search){
            console.log(response);
            this.list = response.Search;
          } else {
            this.list = [];
          }

        }
      ).catch(
        (error) => {
          console.log('Error');
        }

      );
  }


  ngOnInit(): void {
    /* this.uploadService(); */
  }

 /*  uploadService(){
    this.movieService.searchMovie('tt3896198').subscribe(p => console.log(p))
    //console.log();
  } */

}
