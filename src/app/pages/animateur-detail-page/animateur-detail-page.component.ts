import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animateur } from 'src/app/models/animateur-model';
import { AnimateurService } from 'src/app/services/animateur.service';

@Component({
  selector: 'app-animateur-detail-page',
  templateUrl: './animateur-detail-page.component.html',
  styleUrls: ['./animateur-detail-page.component.scss']
})
export class AnimateurDetailPageComponent implements OnInit {
  isLoading = false;

  animateur: Animateur | any;

  constructor( 
    private route: ActivatedRoute,
    private animateurService: AnimateurService) {}


    ngOnInit(): void {
      this.isLoading = true;
      let id = this.route.snapshot.paramMap.get('id');
      this.animateurService.get(Number(id)).subscribe(res => {
        this.animateur = res;
        this.isLoading = false; 
      });
      this.isLoading = true;
    }
}
