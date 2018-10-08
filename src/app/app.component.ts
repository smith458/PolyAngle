import { Component } from '@angular/core';
import { SENATORS } from './mock-senators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PolyScite';
  senators = SENATORS.results[0].members;
}
