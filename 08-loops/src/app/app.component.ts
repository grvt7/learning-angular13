import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '8-loops';
  numbers = [1,2,3,4,5,6,7];
  numberRep = [
    {number:1, spell : ['One', 'Ek']},
    {number:2, spell : ['Two', 'Do']},
    {number:3, spell : ['Three', 'Teen']},
    {number:4, spell : ['Four', 'Char']},
    {number:5, spell : ['Five', 'Panch']},
    {number:6, spell : ['Six', 'Chah']},
    {number:7, spell : ['Seven', 'Saat']}
  ];
}
