import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Baby } from '../entities/baby';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  private babies: Baby[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.babies = this.data.getBabies();
  }

  onBabyClicked(obj) {
    console.log("baby", obj.baby);
    console.log("test " + obj.test);
  }
}
