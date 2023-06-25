import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-province',
  templateUrl: './home-province.component.html',
  styleUrls: ['./home-province.component.scss']
})
export class HomeProvinceComponent {
  constructor(
    public router: Router
) { }

 
featuresText = [
    {
        image1: `assets/images/province_1.jpg`,
        image2: `assets/images/province_2.jpg`,
        title: `Les coordinations exécutives provinciales`,
        paragraph: `Il poursuit son expansion nationale et sa vision africaine reste envisagée, nous
        sommes à ce jour implantés dans 5 Provinces de la RDC.`,
        list: [
            {
                title: `Le Kasaï-Oriental`
            },
            {
                title: `Le haut Katanga`
            },
            {
                title: `Le Nord-Kivu`
            },
            {
                title: `Le Kasaï-Central`
            },
            {
                title: `Le Kwilu`
            }, 
        ],
        buttonText: `Voir plus`,
        buttonLink: `/about`
    }
]

}
