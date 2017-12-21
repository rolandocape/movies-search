import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesDataService} from '../../services/movies-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  private subscription: any;
  private movieId: any;
  public movieDetails: any;

  constructor(private movieDataService: MoviesDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.movieDataService.getMovieDetails(this.movieId).subscribe(movieDet => {
        console.log(movieDet);
        this.movieDetails = movieDet;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
