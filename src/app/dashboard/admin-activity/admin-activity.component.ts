import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity-model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-admin-activity',
  templateUrl: './admin-activity.component.html',
  styleUrls: ['./admin-activity.component.scss']
})
export class AdminActivityComponent implements OnInit {

  isloading = false;

  activityList: Activity[] = [];

  lastPage: number | undefined;

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.load(); 
  }

  load(page = 1): void {
    this.isloading = true;
    this.activityService.all(page).subscribe(res => {
        this.activityList = res.data;
        this.lastPage = res.meta.last_page;
        this.isloading = false;
      }
    );
    this.isloading = false;
  }



  delete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      this.activityService
        .delete(id)
        .subscribe(() => this.activityList = this.activityList.filter(item => item.id !== id));
    }
  }
}