import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-objectifs',
  templateUrl: './home-objectifs.component.html',
  styleUrls: ['./home-objectifs.component.scss']
})
export class HomeObjectifsComponent {
  constructor(
    public router: Router
) { }

isOpen = false;

openPopup(): void {
    this.isOpen = true;
}

closePopup(): void {
    this.isOpen = false;
}
}
