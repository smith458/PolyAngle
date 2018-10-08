import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AbbrevToPartyPipe } from './Pipes/abbrevToParty-transform';
import { AbbrevToStatePipe } from './Pipes/abbrevToState-transform';
import { DateToAgePipe } from './Pipes/dateToAge-transform';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AbbrevToPartyPipe,
    AbbrevToStatePipe,
    DateToAgePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
