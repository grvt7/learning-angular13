import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {name:'Garvit', email:'garvit@gmail.com'},
      {name:'Sam', email:'sam@gmail.com'},
      {name:'Bruce', email:'bruce@gmail.com'},
      {name:'Tony', email:'tony@gmail.com'}
    ]
  }
}
