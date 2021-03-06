import { UsersService } from './../../users.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Baby } from '../../entities/baby';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() babyInput: Baby;
  @Output() babyClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onDelete(baby: Baby) {
    // call the service that calls the ws.
    this.usersService.deleteBaby(baby).subscribe(result => {
      console.log(result);
    });
  }

  onBabyClick() {
    let testVar = 1;
    let obj = { baby: this.babyInput, test: testVar };
    this.babyClicked.emit(obj);
  }

}
