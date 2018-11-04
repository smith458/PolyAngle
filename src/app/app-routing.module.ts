import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SenatorListComponent } from './senator-list/senator-list.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/senators', pathMatch: 'full' },
  { path: 'senators', component: SenatorListComponent },
  { path: 'member/:id', component: MemberDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
