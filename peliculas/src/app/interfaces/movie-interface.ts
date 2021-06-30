export interface Search {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface Rating {
  Source: string;
  Value: string;
}




/* export class Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;

  constructor(
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string){
      this.Title = Title;
      this.Year = Year;
      this.imdbID = imdbID;
      this.Type = Type;
      this.Poster = Poster;
  }
}
 */
