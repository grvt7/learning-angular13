import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '27-reactive-validation';
  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required])
  });

  loginUser(){
    console.warn(this.loginForm.value);
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }
}
