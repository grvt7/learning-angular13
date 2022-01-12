import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '6-condition-statements';
  show = true;
  count = 0;
  toggleShow(){
    if(this.count %2 == 0){
      this.show = true;
      this.count++;
    }
    else{
      this.count++;
      this.show = false;
    }
  }

  // Using ng-template
  color = "red";
  color2 = "abc";
}
