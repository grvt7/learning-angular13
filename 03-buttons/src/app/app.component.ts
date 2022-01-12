import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Button Events in Angular';
  // Used in Previous Commit
  getData(val:string){
    console.warn(val)
  }
  // Current Commit
  // Good Pactise to Display the type of variable created
  displayValue:string = '';
  getValue(value : string){
    console.warn(value);
    this.displayValue = value;
  }
}
