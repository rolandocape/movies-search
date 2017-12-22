import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';

import {AppComponent} from './app.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MoviesDataService} from './services/movies-data.service';
import {MovieThumbComponent} from './components/movie-thumb/movie-thumb.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesListComponent},
  {path: 'movies/:id', component: MovieDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieThumbComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [MoviesDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
