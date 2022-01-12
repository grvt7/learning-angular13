import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Add the import statement for the modeule to be imported
import {UserModule} from './user/user.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  //Add the module refrence to registed the imported module
  imports: [
    BrowserModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
