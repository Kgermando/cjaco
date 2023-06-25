import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from 'src/app/models/events-model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-details-page',
  templateUrl: './events-details-page.component.html',
  styleUrls: ['./events-details-page.component.scss']
})
export class EventsDetailsPageComponent implements OnInit {

  isLoading = false;

  event: Events | any;

  constructor( 
    private route: ActivatedRoute,
    private eventService: EventsService) {}


    ngOnInit(): void {
      this.isLoading = true;
      let id = this.route.snapshot.paramMap.get('id');
      this.eventService.get(Number(id)).subscribe(res => {
        this.event = res;
        this.isLoading = false; 
      });
      this.isLoading = true;
    }
  
}
