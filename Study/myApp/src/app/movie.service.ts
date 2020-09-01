import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http: Http) {
    console.log('Movie service Initialized');
  }

  getMovies(imdbID) {
    return this.http.get('http://www.omdbapi.com/?apikey=5ffd6208&t=' + imdbID + '&plot=full')
      .map(res => res.json());
  }
}
