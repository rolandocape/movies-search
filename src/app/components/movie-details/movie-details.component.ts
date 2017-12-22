import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesDataService} from '../../services/movies-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  public movieDetails: any;
  public genres: any[];
  public companies: any[];
  private subscription: any;
  private movieId: any;

  constructor(private movieDataService: MoviesDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.movieDataService.getMovieDetails(this.movieId).subscribe(movieDet => {
        this.movieDetails = movieDet;
        this.genres = movieDet.genres;
        this.companies = movieDet.production_companies;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
