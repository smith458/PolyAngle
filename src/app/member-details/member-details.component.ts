import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SenatorsService } from '../senators.service';
import { Senator } from '../senator';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  id: string;
  senator: Senator = new Senator();

  constructor(
    private route: ActivatedRoute,
    private senatorService: SenatorsService,
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const senators = await this.senatorService.getSenators();
    this.senator = senators.find(s => s.id === this.id);
  }

}
