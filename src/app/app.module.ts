import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AbbrevToPartyPipe } from './Pipes/abbrevToParty-transform';
import { AbbrevToStatePipe } from './Pipes/abbrevToState-transform';
import { DateToAgePipe } from './Pipes/dateToAge-transform';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SenatorListComponent } from './senator-list/senator-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MemberDetailsComponent } from './member-details/member-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AbbrevToPartyPipe,
    AbbrevToStatePipe,
    DateToAgePipe,
    SenatorListComponent,
    MemberDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [DateToAgePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
