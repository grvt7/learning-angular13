import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  userData : any;
  constructor(private users : UserdataService){
    console.warn(users.users());
    this.userData = users.users();    
  }

  ngOnInit(): void {
  }

}
