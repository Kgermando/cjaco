import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-activity',
  templateUrl: './home-activity.component.html',
  styleUrls: ['./home-activity.component.scss']
})
export class HomeActivityComponent {
  constructor(
    public router: Router
) { }
}
