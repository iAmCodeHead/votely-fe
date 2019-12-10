import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Login } from '../login';
import { Signup } from '../signup';
import { MustMatch } from '../helpers/must-match.validator';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  data: FormGroup;
  signup: FormGroup;

  constructor(private fb: FormBuilder) { }

  loginForm({ value, valid }: { value: Login, valid: boolean }) {
    console.log(value, valid);
  }

  signupForm({ value, valid }: { value: Signup, valid: boolean }) {
    console.log(value, valid);
  }



  ngOnInit() {
    this.data = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


    this.signup = this.fb.group({
      signup_email: ['', [Validators.required, Validators.email]],
      signup_password: ['', [Validators.required, Validators.minLength(6)]],
      signup_confirm_password: ['', [Validators.required, Validators.minLength(6)]],
      size: ['', [Validators.required]]
    },{
      validator: MustMatch('signup_password', 'signup_confirm_password')
    });
  }

}
