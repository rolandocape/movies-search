import {Component, OnInit} from '@angular/core';
import {MoviesDataService} from '../../services/movies-data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: any[];
  topRated: any[];
  form: FormGroup;

  constructor(private moviesDataService: MoviesDataService, private router: Router) {
  }

  ngOnInit() {
    this.moviesDataService.getTopRatedMovies()
      .subscribe(moviesData => {
        this.movies = moviesData.results;
        this.topRated = moviesData.results;
      });
    this.form = new FormGroup({
      search: new FormControl('')
    });
    this.form.valueChanges.debounceTime(500).subscribe(({search}) => {
      if (search) {
        this.moviesDataService.searchMovies(search)
          .subscribe(moviesData => {
            this.movies = moviesData.results;
          });
      } else {
        this.movies = this.topRated;
      }
    });
  }

  navToMovieDetails(movie_id) {
    this.router.navigateByUrl('/movies/' + movie_id);
  }
}
