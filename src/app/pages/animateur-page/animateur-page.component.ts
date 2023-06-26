import { Component, OnInit } from '@angular/core';
import { Animateur } from 'src/app/models/animateur-model';
import { AnimateurService } from 'src/app/services/animateur.service';

@Component({
  selector: 'app-animateur-page',
  templateUrl: './animateur-page.component.html',
  styleUrls: ['./animateur-page.component.scss']
})
export class AnimateurPageComponent implements OnInit {


  isloading = false;

  animateurList: Animateur[] = [];

  lastPage: number | undefined;

  constructor(private animateurService: AnimateurService) {}

  ngOnInit(): void {
    this.load(); 
  }

  load(page = 1): void {
    this.isloading = true;
    this.animateurService.all(page).subscribe(res => {
        this.animateurList = res.data;
        this.lastPage = res.meta.last_page;
        this.isloading = false;
      }
    );
    this.isloading = false;
  }

}
