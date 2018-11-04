import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SENATORS } from '../mock-senators';
import { SenatorsService } from '../senators.service';
import { Senator } from '../senator';
import { MatSort, MatTableDataSource, MatTable } from '@angular/material';
import { DateToAgePipe } from '../Pipes/dateToAge-transform';

@Component({
  selector: 'app-senator-list',
  templateUrl: './senator-list.component.html',
  styleUrls: ['./senator-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SenatorListComponent implements OnInit {
  senators: Senator[];
  displayedColumns: string[] = ['first_name', 'last_name', 'party', 'state', 'age', 'dw_nominate',
'votes_with_party_pct', 'missed_votes', 'missed_votes_pct'];
  dataSource: MatTableDataSource<Senator>;
  expandedElement: Senator;
  constructor(private senatorService: SenatorsService, private dateToAge: DateToAgePipe) { }

  @ViewChild(MatTable) table: MatTable<Senator>;
  @ViewChild(MatSort) sort: MatSort;

  async ngOnInit() {
    this.senators = await this.senatorService.getSenators();
    this.dataSource = new MatTableDataSource(this.senators);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data: Senator, sortHeaderID: string) => {
      if (sortHeaderID === 'age') {
        return new DateToAgePipe().transform(data['date_of_birth']);
      }
      return data[sortHeaderID];
    };
  }

  senatorSort(senator: Senator, header: string): string {
    let value: string;
    switch (header) {
      case 'age':
        value =  new DateToAgePipe().transform(senator['date_of_birth']).toString();
        break;
      default:
        value = senator[header];
    }
    return value;
  }
}
