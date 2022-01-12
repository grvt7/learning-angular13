import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reusable Component';
  userDetails = [
    {name : "Garvit", email: "garvit@email.com"},
    {name : "Arush", email: "arush@email.com"},
    {name : "Ayush", email: "ayush@email.com"},
    {name : "Gauri", email: "gauri@email.com"},
    {name : "Sanchit", email: "sanchit@email.com"}
  ];
}
