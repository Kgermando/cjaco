import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  notFound = [
    {
        image: `assets/images/error.gif`,
        title: `Oops! Cette page est introuvable`,
        buttonText: `Revenir au debut`
    }
]
}
