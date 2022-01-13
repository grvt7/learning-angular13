import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
  url : string = 'http://localhost:9090/books';
  constructor(private http : HttpClient) { }
  savebooks(data : any){
    return this.http.post(this.url, data);
  }
}
