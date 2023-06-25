import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events-model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss']
})
export class AdminEventsComponent implements OnInit {

  isloading = false;

  eventList: Events[] = [];

  lastPage: number | undefined;

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.load(); 
  }

  load(page = 1): void {
    this.isloading = true;
    this.eventService.all(page).subscribe(res => {
        this.eventList = res.data;
        this.lastPage = res.meta.last_page;
        this.isloading = false;
      }
    );
    this.isloading = false;
  }



  delete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      this.eventService
        .delete(id)
        .subscribe(() => this.eventList = this.eventList.filter(item => item.id !== id));
    }
  }
}
