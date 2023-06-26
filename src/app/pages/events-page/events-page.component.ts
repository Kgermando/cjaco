import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events-model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  eventList: Events[] = [];

  lastPage: number | any; 

  imageUrl: string | any;

  constructor(private eventService: EventsService) {}
 
  ngOnInit(): void {
    this.load();
  }
  
  load(page = 1) {
    this.eventService.all(page).subscribe(res => {
        this.eventList = res.data;
        this.lastPage = res.meta.last_page;
      }
    );
  } 

}
