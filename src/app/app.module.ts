import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AbbrevToPartyPipe } from './Pipes/abbrevToParty-transform';
import { AbbrevToStatePipe } from './Pipes/abbrevToState-transform';
import { DateToAgePipe } from './Pipes/dateToAge-transform';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SenatorListComponent } from './senator-list/senator-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AbbrevToPartyPipe,
    AbbrevToStatePipe,
    DateToAgePipe,
    SenatorListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
