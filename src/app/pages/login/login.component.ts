import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // simulate db
  users: any = [{
    "_id": 1,
    "name": "Alex",
    "last_name": "Ruiz",
    "email": "alex@gmail.com",
    "username": "user",
    "password": "root" // decripted for simulation
  }];
  public loginForm = new FormGroup({
    // email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false)
  });
  public loginFormSubmitted = false;
  loginError = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  get lf() {
    return this.loginForm.controls;
  }

  send() {
    this.loginError = false;
    this.loginFormSubmitted = true;
    localStorage.setItem('x_token', 'TOKENFAKE01209123');
    localStorage.setItem('remember', this.loginForm.value.rememberMe);
    // console.log(this.loginForm.value.rememberMe);
    this.login(this.loginForm.value.username, this.loginForm.value.password);

  }

  login(username: string, pass: string) {
    console.log(username, pass);
    let user_found = this.users.find((element: { username: string; password: string; }) => element.username == username && element.password == pass);
    console.log(user_found);
    if (user_found) {
      this.router.navigate([`administrator`]);
    } else {
      this.loginError = true;
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('remember') == 'true' && localStorage.getItem('x_token')) {
      this.router.navigate([`administrator`]);
    } else {
      localStorage.clear();
    }

  }

}
