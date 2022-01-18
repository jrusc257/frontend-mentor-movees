import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster-thumbnail',
  templateUrl: './poster-thumbnail.component.html',
  styleUrls: ['./poster-thumbnail.component.scss']
})
export class PosterThumbnailComponent implements OnInit {

  @Input() movieConfig: any;

  constructor() { }

  ngOnInit(): void {
  }

}
