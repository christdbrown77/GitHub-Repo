import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  providers: [MovieService],
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = [];
  movie1 = '';

  constructor(private movieService: MovieService) {
    this.movieService.getMovies('The Matrix').subscribe(movies => {
      console.log(movies);
      this.movies = movies;
    });
  }

  getMovieDetails(movieselected) {
    this.movieService.getMovies(movieselected).subscribe(movies => {
      console.log(movies);
      this.movies = movies;
    });
  }

  ngOnInit() {
  }

}
