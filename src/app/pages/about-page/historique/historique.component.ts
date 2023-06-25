import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent {
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
