import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {
    "_id": 1,
    "name": "Alex",
    "last_name": "Ruiz",
    "email": "alex@gmail.com",
    "username": "user",
  };
  profileFormSubmitted = false;
  public profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
  });
  constructor() { }
  get pf() {
    return this.profileForm.controls;
  }

  save() {
    console.log(this.profileForm.value);
  }
  ngOnInit(): void {
    this.profileForm.patchValue(this.user);
  }

}
