import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import moviesList from "../../assets/MovieCatalog.json";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  routeParams: any;
  movieList: any;
  movieConfig: any;
  trailerURL: string;
  sanitizer;

  constructor(route: ActivatedRoute, sanitizer: DomSanitizer) {
    this.routeParams = route.snapshot.params;
    this.movieList = moviesList.movies;
    this.sanitizer = sanitizer;
    this.movieConfig = this.movieList.filter(obj => {
      return obj.movieID == this.routeParams.id;
    })[0]
    if(this.movieConfig.trailerYouTubeID) {
      this.trailerURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.movieConfig.trailerYouTubeID);
    }
  }

  ngOnInit(): void {
    
  }
}
