import { Component, OnInit, Input  } from '@angular/core';
import { Search, Movie, Rating } from 'src/app/interfaces/movie-interface';
import { MovieService } from 'src/app/services/MovieService';

@Component({
  selector: 'app-ver-movie',
  templateUrl: './ver-movie.component.html',
  styleUrls: ['./ver-movie.component.css']
})
export class VerMovieComponent implements OnInit {

  @Input() id: string = '';
  movie: Movie | undefined;

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getMovieById(this.id);
  }

  private getMovieById(id: string){
    this.movieService.searchMovie(id,0)
      .then(
        (response: any) => {
            this.movie = response;
            console.log(this.movie);
        }
      ).catch(
        (error) => {
          console.log('Error');
        }

      );
  }

}
