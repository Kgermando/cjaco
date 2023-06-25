import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-feed-back',
  templateUrl: './home-feed-back.component.html',
  styleUrls: ['./home-feed-back.component.scss']
})
export class HomeFeedBackComponent {

  constructor(
    public router: Router
) { }

sectionTitle = [
    {
        title: `Ce que dises nos ambassadeurs`,
        paragraph: `There are many variations of passages of lorem ipsum available,have suffered alterationby injectumour, or randomised words which don't look.`,
        buttonText: `Voir plus`,
        buttonLink: `/testimonials`
    }
]
feedbackBox = [
    {
        userImg: `assets/images/users/user1.jpg`,
        userName: `Phillip Randolph`,
        userDesignation: `Designer`,
        description: `“It is a long established fact that a reader by the readable content of a page whelooking layout. The point ofIphas a morless.”`,
        rating: [
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            }
        ]
    },
    {
        userImg: `assets/images/users/user2.jpg`,
        userName: `Numbers Collins`,
        userDesignation: `Developer`,
        description: `“It is a long established fact that a reader by the readable content of a page whelooking layout. The point ofIphas a morless.”`,
        rating: [
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star`
            },
            {
                icon: `bx bxs-star-half`
            }
        ]
    }
]

}
