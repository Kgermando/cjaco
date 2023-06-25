import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  subscribe = [
    {
        title: `Soyez le premier a être informer sur l'événement avenir.`,
        buttonText: `Souscrire ici`,
        placeholderText: `Entrer l'adresse Email`
    }
]
}
