import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Passing Parent Component to Child Conponent';
  data=5;
  updateData(){
    this.data = Math.floor(Math.random()*10);
  }
}
