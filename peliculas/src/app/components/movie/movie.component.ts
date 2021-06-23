import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/MovieService';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService : MovieService) { 
  }

  ngOnInit(): void {
    this.uploadService();
  }

  uploadService(){
    this.movieService.searchMovie('tt3896198').subscribe(p => console.log(p))
    //console.log();
  }

}
