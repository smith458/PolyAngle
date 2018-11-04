import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ConnectableObservable } from 'rxjs';
import { map, publish } from 'rxjs/operators';
import { ApiResponse } from './apiResonse';
import { Senator } from './senator';

const httpOptions = {
  headers: new HttpHeaders({
    'X-API-KEY': 'DaqkLm8CokEuDVcBfQD9gszXbX5XAZ5sxY6ViWtB',
  })
};

const endpoint = 'https://api.propublica.org/congress/v2/115/senate/members.json';

@Injectable({
  providedIn: 'root'
})
export class SenatorsService {
  constructor(private http: HttpClient) {}

  response: ConnectableObservable<ApiResponse>;
  senators: Promise<Senator[]>;

  init(): void {
    this.response = this.http.get<ApiResponse>(endpoint, httpOptions) as ConnectableObservable<ApiResponse>;
    const senatorObserv = this.response.pipe(map(x => x.results[0].members));
    this.senators = senatorObserv.toPromise();
  }

  getSenators(): Promise<Senator[]> {
    return this.senators;
  }
}
