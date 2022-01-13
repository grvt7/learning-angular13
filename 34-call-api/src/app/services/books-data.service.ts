import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
  url:string = 'http://localhost:9090/books';

  constructor(private http : HttpClient) { }
  books(){
    return this.http.get(this.url);
  }
}
