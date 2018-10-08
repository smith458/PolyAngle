import { Pipe, PipeTransform } from '@angular/core';
import { ABBREV_TO_PARTY } from '../JsonConversions/abbrevToParty';

@Pipe({ name: 'abbrevToParty' })
export class AbbrevToPartyPipe implements PipeTransform {
  transform(value: any) {
    return ABBREV_TO_PARTY[value];
  }
}
