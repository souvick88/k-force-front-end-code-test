import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnrolleeComponent } from './enrollee/enrollee.component';

@NgModule({
  declarations: [
    AppComponent,
    EnrolleeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
