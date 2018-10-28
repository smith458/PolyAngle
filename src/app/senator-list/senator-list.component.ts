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
}
