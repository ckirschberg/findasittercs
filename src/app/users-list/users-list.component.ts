import { UsersService } from './../users.service';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Baby } from '../entities/baby';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Sitter } from '../entities/sitter';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  private babies: Baby[];
  private sitters: Sitter[];
  private averages: number[];

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
      this.averages = [];
      this.babies = users.babies;
      this.sitters = users.sitters;

      this.sitters.forEach(sitter => {

        // let sum = 0;
        // for(let i=0; i < sitter.ratings.length; i++) {
        //   sum += sitter.ratings[i];
        // }

        let result: number = sitter.ratings.reduce((x,y) => { return x + y}, 0);
        // console.log(result);
        let average: number = result / sitter.ratings.length;
        console.log("average is:" + average);
        this.averages.push(average);
      });
    })

  }

  onBabyClicked(obj) {
    console.log("baby", obj.baby);
    console.log("test " + obj.test);
  }
}
