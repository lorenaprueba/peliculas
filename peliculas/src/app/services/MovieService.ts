import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Aqui se realizan las actividades de los botones ejecutar devolucion y novedad, ademas del cambio de ubicacion
export class MovieService {

  ENDPOINT = 'http://www.omdbapi.com/?apikey=a897156d&';
  BUSCAR_NOMBRE = 's=';
  BUSCAR_ID = 'i=';

  constructor(private httpClient: HttpClient) {
  }

  // GET
  /**
   * Método que recibe un query y realiza un consumo por método GET
   * @param query
   * @returns
   */
  private getQuery(query: string) {
    const url = `${this.ENDPOINT}${query}`;
    return this.httpClient.get(url);
  }

  // Métodos
  /**
   * Método que recibe un texto de busqueda que puede ser el id o nombre de la pelicula,
   * y recibe un numero donde si es 0 se consulta por ID y cualquier otro número por nombre
   * de la película
   * @param texto
   * @param tipo
   * @returns
   */
  searchMovie(texto: string, tipo: number) {
    let query = '';
    let promise;
    if (tipo === 0) {
      query = `${this.BUSCAR_ID}${texto}`;
    } else {
      query = `${this.BUSCAR_NOMBRE}${texto}`;
    }
    return this.getQuery(query).toPromise();
  }

  ListMovie(movie: string) {

    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<any>(`${this.ENDPOINT}?apikey=a897156d&i=${movie}`, { withCredentials: true });
  }

}
