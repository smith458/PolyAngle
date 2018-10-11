import { Component, OnInit } from '@angular/core';
import { SENATORS } from '../mock-senators';
import { SenatorsService } from '../senators.service';
import { Senator } from '../senator';

type SortFunc = (a: Senator, b: Senator) => number;

@Component({
  selector: 'app-senator-list',
  templateUrl: './senator-list.component.html',
  styleUrls: ['./senator-list.component.css']
})
export class SenatorListComponent implements OnInit {
  senators: Senator[];

  constructor(private senatorService: SenatorsService) { }

  ngOnInit() {
    this.getSenators();
  }

  getSenators(): void {
    this.senatorService.getSenators().subscribe(s => this.senators = s.results[0].members);
  }

  sortByName(a: Senator, b: Senator): number {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  sortByNameRev(a: Senator, b: Senator): number {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  }

  sortName(func: SortFunc, revFunc: SortFunc): void {
    const sortedSenators: Senator[] = this.senators.sort(func);
    if (sortedSenators.toString() === this.senators.toString()) {
      this.senators = sortedSenators.sort(revFunc);
    } else {
      this.senators = sortedSenators;
    }
  }
}
