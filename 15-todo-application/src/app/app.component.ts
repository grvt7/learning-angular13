import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo Application';
  list:any[] = [];
  color = "true";
  addTask(item: string) {
    this.list.push({id:this.list.length, task:item});   
    console.warn(this.list)
  }
  removeItem(id : number){
    this.list=this.list.filter(item=>item.id!== id);
  }
}
