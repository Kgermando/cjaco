import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity-model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-home-activity',
  templateUrl: './home-activity.component.html',
  styleUrls: ['./home-activity.component.scss']
})
export class HomeActivityComponent implements OnInit {
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
    this.activityService.all(page).subscribe(res => {
        this.activityList = res.data;
        this.lastPage = res.meta.last_page;
      }
    );
  } 
}
