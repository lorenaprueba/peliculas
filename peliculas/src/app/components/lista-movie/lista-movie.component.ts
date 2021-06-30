import { Component, OnInit, Input } from '@angular/core';
import {Search} from 'src/app/interfaces/movie-interface';

@Component({
  selector: 'app-lista-movie',
  templateUrl: './lista-movie.component.html',
  styleUrls: ['./lista-movie.component.css']
})
export class ListaMovieComponent implements OnInit {

  @Input() list: Search[] = [];
  movie: Search | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  enviaDatos(item: Search){
    console.log(item);
    this.movie = item;
  }
}
