import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {apiKey} from '../app.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesDataService {
  constructor(public http: Http) {
  }

  getTopRatedMovies() {
    return this.http.get(`/api/movie/top_rated?api_key=${apiKey}`)
      .map(res => res.json());
  }

  getMovieDetails(movie_id) {
    return this.http.get(`/api/movie/${movie_id}?api_key=${apiKey}`)
      .map(res => {
        return res.json();
      });
  }

  searchMovies(name) {
    return this.http.get(`/api/search/movie?api_key=${apiKey}&query=${name}`)
      .map(res => {
        return res.json();
      });
  }
}
