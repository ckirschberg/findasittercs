import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Baby } from '../entities/baby';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private registerForm;

  constructor(private data: DataService,
    private fb: FormBuilder) { }

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
    let baby: Baby = registerForm.value;
    this.data.addBaby(baby);
    
    console.log(registerForm.value);
  }

}
