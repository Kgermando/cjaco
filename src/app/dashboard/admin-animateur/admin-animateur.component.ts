import { Component, OnInit } from '@angular/core';
import { Animateur } from 'src/app/models/animateur-model';
import { AnimateurService } from 'src/app/services/animateur.service';

@Component({
  selector: 'app-admin-animateur',
  templateUrl: './admin-animateur.component.html',
  styleUrls: ['./admin-animateur.component.scss']
})
export class AdminAnimateurComponent implements OnInit {

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



  delete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      this.animateurService
        .delete(id)
        .subscribe(() => this.animateurList = this.animateurList.filter(item => item.id !== id));
    }
  }
}