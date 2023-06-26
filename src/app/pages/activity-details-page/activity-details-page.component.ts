import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/models/activity-model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-details-page',
  templateUrl: './activity-details-page.component.html',
  styleUrls: ['./activity-details-page.component.scss']
})
export class ActivityDetailsPageComponent implements OnInit {
  isLoading = false;

  activity: Activity | any;

  constructor( 
    private route: ActivatedRoute,
    private activityService: ActivityService) {}


    ngOnInit(): void {
      this.isLoading = true;
      let id = this.route.snapshot.paramMap.get('id');
      this.activityService.get(Number(id)).subscribe(res => {
        this.activity = res;
        this.isLoading = false; 
      });
      this.isLoading = true;
    }
  
}
