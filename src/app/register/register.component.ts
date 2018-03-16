import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Baby } from '../entities/baby';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm;

  constructor(private data: DataService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
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
      this.data.addBaby(baby);
      this.router.navigate(['users-list']);
    // }
  


    console.log(registerForm.value);
  }

}
