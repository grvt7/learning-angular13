import { Component } from '@angular/core';
import { BooksDataService } from './services/books-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Post to API in Angular';
  constructor(private booksData : BooksDataService){ }
  getBookData(data : any){
    console.warn(data);
    this.booksData.savebooks(data).subscribe((data) => {
      console.warn(data);
    });
  }
}
