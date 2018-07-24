import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HerosPageComponent } from './heros-page/heros-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosPageComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
