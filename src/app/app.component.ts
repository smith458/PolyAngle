import { Component, OnInit } from '@angular/core';
import { SenatorsService } from './senators.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PolyScite';

  constructor(private senatorService: SenatorsService) {}

  ngOnInit() {
    this.senatorService.init();
  }
}
