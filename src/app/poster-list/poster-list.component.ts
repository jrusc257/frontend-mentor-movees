import { Component, Input, OnInit } from '@angular/core';
import moviesList from "../../assets/MovieCatalog.json";

@Component({
  selector: 'app-poster-list',
  templateUrl: './poster-list.component.html',
  styleUrls: ['./poster-list.component.scss']
})
export class PosterListComponent implements OnInit {

  movieList: any;
  @Input() searchText: string = "";
  @Input() listSortOrder: string = "";

  constructor() {
    this.movieList = moviesList.movies;
  }

  ngOnInit(): void {
  }

}
