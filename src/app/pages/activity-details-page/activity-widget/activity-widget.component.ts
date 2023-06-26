import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity-model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-widget',
  templateUrl: './activity-widget.component.html',
  styleUrls: ['./activity-widget.component.scss']
})
export class ActivityWidgetComponent implements OnInit {
  activityList: Activity[] = [];

  lastPage: number | any; 

  loading = false;

  constructor(
    public router: Router,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(page = 1) {
    this.loading = true;
    this.activityService.all(page).subscribe(res => {
        this.activityList = res.data;
        this.lastPage = res.meta.last_page;
        this.loading = false;
      }
    );
    this.loading = false;
  } 
}
