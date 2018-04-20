import { UsersActions } from './../users.actions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rating;
  id = '1' // Testing. Should be loaded into this component.

  constructor(public usersActions: UsersActions) { }

  ngOnInit() {
  }

  onSubmit() {
    this.usersActions.addRating(this.id, parseInt(this.rating));
    console.log(this.rating);
  }

}
