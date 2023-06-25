import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent {
  constructor(
    public router: Router
) { }

featuredBox = [
    {
        icon: `assets/images/featured/icon1.gif`,
        title: `Produisons des études`
    },
    {
        icon: `assets/images/featured/icon2.gif`,
        title: `Elaborons et Réalisons des projets`
    },
    {
        icon: `assets/images/featured/icon3.gif`,
        title: `Plaidoyers, campagnes, sensibilisation`
    },
    {
        icon: `assets/images/featured/icon4.gif`,
        title: `Développement économique inclusif`
    } 
]
}
