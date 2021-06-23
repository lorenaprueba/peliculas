import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
// Aqui se realizan las actividades de los botones ejecutar devolucion y novedad, ademas del cambio de ubicacion
export class MovieService {

    ENDPOINT = 'http://www.omdbapi.com/';

    constructor(private httpClient: HttpClient) {
    }

    searchMovie(movie : string) {

        // tslint:disable-next-line: max-line-length
         return this.httpClient.get<any>(`${this.ENDPOINT}?apikey=a897156d&i=${movie}`, { withCredentials: false});

    }

    ListMovie(movie : string) {

        // tslint:disable-next-line: max-line-length
        return this.httpClient.get<any>(`${this.ENDPOINT}?apikey=a897156d&i=${movie}`, { withCredentials: true});
    }

}
