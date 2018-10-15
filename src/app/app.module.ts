import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AbbrevToPartyPipe } from './Pipes/abbrevToParty-transform';
import { AbbrevToStatePipe } from './Pipes/abbrevToState-transform';
import { DateToAgePipe } from './Pipes/dateToAge-transform';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatSortModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    MatTableModule,
    MatSortModule,
    NoopAnimationsModule,
  ],
  providers: [DateToAgePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
