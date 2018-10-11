import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { ApiResponse } from './apiResonse';

const httpOptions = {
  headers: new HttpHeaders({
    'X-API-KEY': 'DaqkLm8CokEuDVcBfQD9gszXbX5XAZ5sxY6ViWtB',
  })
};

@Injectable({
  providedIn: 'root'
})
export class SenatorsService {

  constructor(private http: HttpClient) {}

  getSenators(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('https://api.propublica.org/congress/v2/115/senate/members.json', httpOptions);
  }
}
