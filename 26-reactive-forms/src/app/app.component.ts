import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Forms in Angular';
  loginForm = new FormGroup({
    user : new FormControl(''),
    password : new FormControl('')
  });

  // The values are mapped to the loginForm fields and printed to the console.
  loginUser(){
    console.warn(this.loginForm.value);
  }
}
