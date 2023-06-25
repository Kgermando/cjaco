import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})
export class ActivityPageComponent {
  constructor(
    public router: Router
) { }
}
