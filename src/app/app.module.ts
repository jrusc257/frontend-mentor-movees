import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { PosterListComponent } from './poster-list/poster-list.component';
import { HomeComponent } from './home/home.component';
import { PosterThumbnailComponent } from './poster-thumbnail/poster-thumbnail.component';
import { SearchtextPipe } from './searchtext.pipe';
import { FormsModule } from '@angular/forms';
import { SortByPipePipe } from './sort-by-pipe.pipe';
import { TomatoRatingComponent } from './tomato-rating/tomato-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    SiteHeaderComponent,
    PosterListComponent,
    HomeComponent,
    PosterThumbnailComponent,
    SearchtextPipe,
    SortByPipePipe,
    TomatoRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
