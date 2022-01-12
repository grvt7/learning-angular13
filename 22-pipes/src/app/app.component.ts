import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Pipes';
  today = Date();
  // Custom Pipe
  capString(data : string){
    return data.toUpperCase();
  }

  // Advance Pipe
  user = {
    name : 'Garvit Chaudhary',
    age : 23
  }
}
