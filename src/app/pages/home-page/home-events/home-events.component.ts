import { Component, OnInit } from '@angular/core';  
import { Events } from 'src/app/models/events-model';
import { EventsService } from 'src/app/services/events.service';  

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.scss']
})

export class HomeEventsComponent implements OnInit {
 
  eventList: Events[] = [];

  lastPage: number | any; 

  imageUrl: string | any;

  constructor(private eventService: EventsService) {}
 
  ngOnInit(): void {
    this.load();
    this.imageUrl = 'https://cjaco-spaces.fra1.digitaloceanspaces.com/75fea91a05507d241ecb4b5833e1b42c.jpg';
 
  }
  
  load(page = 1) {
    this.eventService.all(page).subscribe(res => {
        this.eventList = res.data;
        this.lastPage = res.meta.last_page;
      }
    );
  } 

}
