import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Baby } from '../entities/baby';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { UsersActions } from '../users.actions';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm;
  private isBaby;

  constructor(private data: DataService,
    private fb: FormBuilder, private router: Router,
    private ngRedux: NgRedux<IAppState>, private usersActions: UsersActions,
    private usersService: UsersService) { }

  ngOnInit() {

    // Subscribe to the users part of the store.
    this.ngRedux.select(state => state.users).subscribe(res => {
      this.isBaby = res.isBaby;
      console.log(this.isBaby);
    });

    this.registerForm = this.fb.group({
      firstname: [''],
      postalCode: [''],
      picture: [''],
      age: [''],
      gender: [''],
    });
  }

  onSubmit(registerForm) {
    // if (form is valid) {
    let baby: Baby = registerForm.value;
    // Test: calling the ws.
    this.usersService.createBaby(baby).subscribe(x => {
      console.log(x);
    });

    this.usersActions.addBaby(baby);

    // this.data.addBaby(baby);
    // this.router.navigate(['users-list']);
    // }
  


    console.log(registerForm.value);
  }

}
