import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-valeurs',
  templateUrl: './home-valeurs.component.html',
  styleUrls: ['./home-valeurs.component.scss']
})
export class HomeValeursComponent {
  constructor(
    public router: Router
) { }

featuredBox = [
    {
        icon: `assets/images/featured/icon5.png`,
        title: `Unité`,
        paragraph: `Ensemble nous pouvons, nous croyons en la philosophie de l'Ubuntu.`
      },
      {
        icon: `assets/images/featured/icon6.gif`,
        title: `Rigueur`,
        paragraph: `Chacun doit être exigent avec lui-même et s'obliger de produire le meilleur de lui-même.`
      },
      {
        icon: `assets/images/featured/icon7.gif`,
        title: `Excellence`,
        paragraph: `Toujours le meilleur résultat.`
      }, 
  ]
}
