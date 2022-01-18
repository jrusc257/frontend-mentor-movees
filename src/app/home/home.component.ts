import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import moviesList from '../../assets/MovieCatalog.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText;
  listSortOrder = 'asc';

  constructor(
    private router: Router
  ) {}

  setSortOrder(param): void {
    this.listSortOrder = param;
  }

  resetSearch(): void {
    this.searchText = '';
  }

  random(): void{
    const randomId = Math.floor(Math.random() * moviesList.movies.length) + 1;
    this.router.navigate(['/details', moviesList.movies[randomId].movieID]);
  }

  ngOnInit(): void {
  }

}
