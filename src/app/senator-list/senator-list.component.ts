import { Component, OnInit, ViewChild } from '@angular/core';
import { SENATORS } from '../mock-senators';
import { SenatorsService } from '../senators.service';
import { Senator } from '../senator';
import { MatSort, MatTableDataSource, MatTable } from '@angular/material';
import { ApiResponse } from '../apiResonse';
import { DateToAgePipe } from '../Pipes/dateToAge-transform';

@Component({
  selector: 'app-senator-list',
  templateUrl: './senator-list.component.html',
  styleUrls: ['./senator-list.component.css']
})
export class SenatorListComponent implements OnInit {
  senators: Senator[];
  displayedColumns: string[] = ['first_name', 'last_name', 'party', 'state', 'age'];
  dataSource: MatTableDataSource<Senator>;
  constructor(private senatorService: SenatorsService, private dateToAge: DateToAgePipe) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit() {
    // this.assignDataSource(SENATORS);
    this.getSenators();
  }

  getSenators(): void {
    this.senatorService.getSenators().subscribe(this.assignDataSource);
  }

  assignDataSource(x: ApiResponse) {
    console.log(x);
    this.senators = x.results[0].members;
    this.dataSource = new MatTableDataSource(this.senators);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data: Senator, sortHeaderID: string) => {
      if (sortHeaderID === 'age') {
        return new DateToAgePipe().transform(data['date_of_birth']);
      }
      return data[sortHeaderID];
    };
    console.log(this.table);
    this.table.renderRows();
  }
}
