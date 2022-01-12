import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '4-counter';
  count = 0;
  counter(type:string){
    type==='plus'?this.count++:this.count--;
  }
}
