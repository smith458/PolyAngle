import { Component, OnInit } from '@angular/core';
import { SENATORS } from '../mock-senators';
import { SenatorsService } from '../senators.service';
import { Senator } from '../senator';
import { Sort } from '@angular/material';
import { state } from '../../../node_modules/@angular/animations';

function compare(a, b, isAsc): number {
  return (a < b ? 1 : -1) * (isAsc ? 1 : -1);
}

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

  sortData(sort: Sort): void {
    console.log('sorting');
    const data = this.senators.slice();
    if (!sort.active || sort.direction === '') {
      // this.senators = data;
      return;
    }

    this.senators = data.sort((a: Senator, b: Senator): number => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'party': return compare(a.name, b.name, isAsc);
        case 'state': return compare(a.name, b.name, isAsc);
        case 'age': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }
}
