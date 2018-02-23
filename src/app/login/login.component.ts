import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  
  // DI - Dependency Injection
  constructor(private fb: FormBuilder, private router: Router, 
    private authService: AuthService) {
  }

  onSubmitLogin(loginForm) {
    // console.log(loginForm);
    // Send a request to the server
    // Try to login
    if (loginForm.valid) {
      // Send an http request
      console.log("valid");
      this.authService.login().subscribe(() => {
        console.log("Now I am logged in!");
      })
      console.log("Before or after?");


      // this.router.navigate(['contact']); // Navigate
    } else {
      // Show errors and not send a request.
      alert("Fill out the fields, dummy! ")
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required], 
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
