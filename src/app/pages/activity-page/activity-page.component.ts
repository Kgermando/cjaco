import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity-model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})
export class ActivityPageComponent implements OnInit {
  isLoading: boolean = false;
  activityList: Activity[] = [];

  lastPage: number | any; 

  constructor(
    public router: Router,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(page = 1) {
    this.isLoading = true;
    this.activityService.all(page).subscribe(res => {
        this.activityList = res.data;
        this.lastPage = res.meta.last_page;
        this.isLoading = false;
      }
    );
    this.isLoading = false;
  } 
}
