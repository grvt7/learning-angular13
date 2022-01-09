import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  //Adding the module component which needs to be exported.
  exports: [
    LoginComponent
  ]
})
export class UserModule { }
