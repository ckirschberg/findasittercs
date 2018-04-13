import { UsersService } from './../users.service';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Baby } from '../entities/baby';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  private babies: Baby[];

  constructor(private ngRedux: NgRedux<IAppState>, private usersService: UsersService ) { }

  ngOnInit() {
    // let resultFromWs = this.usersService.getUsers();


    this.usersService.getUsers().subscribe( (resultFromWs: any[]) => {
      this.babies = resultFromWs.filter(baby => baby.customerId === '3');

      console.log(resultFromWs);
    });
    console.log("Hello there!");

    // this.babies = this.data.getBabies();
    this.ngRedux.select(state => state.users).subscribe(users => {
      this.babies = users.babies;
    })

  }

  onBabyClicked(obj) {
    console.log("baby", obj.baby);
    console.log("test " + obj.test);
  }
}
