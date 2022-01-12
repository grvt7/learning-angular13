import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic JavaScript';
  data = 20;
  // Type String
  variable = "hello";
  // Type Number
  variable_num = 30;
  getData(item : string){
    return item;
  }
  getItem(){
    this.getData("Hi");
    // This Gives Error
    // this.getData(20);
  }

  // Defining Object / Array
  obj:{name:string, phone:number} = {name:'Garvit', phone:101};
  getData1(item : any){
    this.obj = {name:'Arush', phone:102};
    // this.array=["20", "hi"] Giver Error
  }
  getItem1(){
    this.getData1("Hi");
    // This Gives Error
    // this.getData(20);
  }

  array:number[] = [10,20,30]
}
