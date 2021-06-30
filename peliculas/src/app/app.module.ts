import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { ListaMovieComponent } from './components/lista-movie/lista-movie.component';
import { VerMovieComponent } from './components/modal/ver-movie/ver-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ListaMovieComponent,
    VerMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
