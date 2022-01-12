import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { USDINRPipe } from './pipes/usdinr.pipe'

@NgModule({
  declarations: [
    AppComponent,
    USDINRPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
