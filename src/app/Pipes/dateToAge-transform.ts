import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'dateToAge' })
export class DateToAgePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return moment().diff(value, 'years');
  }
}
