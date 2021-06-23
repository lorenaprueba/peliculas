import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/MovieService';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  findMovie : any;
  constructor(private movieService : MovieService) {
  }

  ngOnInit(): void {
    this.uploadService();
  }

  uploadService(){
      this.movieService.searchMovie('tt3896198').subscribe(p => this.findMovie = p)

  }

}
