import {Component, OnInit, ViewChild} from '@angular/core';
import {ComentsComponent} from '../coments/coments.component';


@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {
  newname: string;
  newreview: string;
  today: number = Date.now();
  reviews = [
    {name: 'Самад', review: 'прекрасная полнометрaжка'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  addReview(newname, newreview){
    this.reviews.unshift({name: newname, review: newreview});
    return false;
  }
}
