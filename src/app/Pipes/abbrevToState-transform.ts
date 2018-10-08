import { Pipe, PipeTransform } from '@angular/core';
import { ABBREV_TO_STATE } from '../JsonConversions/abbrevToState';

@Pipe({ name: 'abbrevToState' })
export class AbbrevToStatePipe implements PipeTransform {
  transform(value: any) {
    return ABBREV_TO_STATE[value];
  }
}
