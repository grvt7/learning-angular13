import { Component } from '@angular/core';
import { BooksDataService } from './services/books-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calling API In Angular';
  books : any ;
  constructor(private booksData : BooksDataService){
    this.booksData.books().subscribe((data) => {
      console.warn("data", data);
      this.books = data;
    });
  }
}
