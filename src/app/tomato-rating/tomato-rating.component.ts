import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tomato-rating',
  templateUrl: './tomato-rating.component.html',
  styleUrls: ['./tomato-rating.component.scss']
})
export class TomatoRatingComponent implements OnInit {

  @Input() ratingPercent: string;
  constructor() { }

  ratingFresh(): boolean {
    if (Number(this.ratingPercent.replace(/\D+/g, '')) > 50) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
  }

}
