import { Senator } from './senator';

export class SenatorList {
  'congress': string;
  'chamber': string;
  'num_results': number;
  'offset': number;
  'members': Senator[];
}
