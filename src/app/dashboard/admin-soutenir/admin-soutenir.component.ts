import { Component, OnInit } from '@angular/core';
import { Soutenir } from 'src/app/models/soutenir-model';
import { SoutenirService } from 'src/app/services/soutenir.service';

@Component({
  selector: 'app-admin-soutenir',
  templateUrl: './admin-soutenir.component.html',
  styleUrls: ['./admin-soutenir.component.scss']
})
export class AdminSoutenirComponent implements OnInit {

  isloading = false;

  soutenirList: Soutenir[] = [];

  lastPage: number | undefined;

  constructor(private soutenirService: SoutenirService) {}

  ngOnInit(): void {
    this.load(); 
  }

  load(page = 1): void {
    this.isloading = true;
    this.soutenirService.all(page).subscribe(res => {
        this.soutenirList = res.data;
        this.lastPage = res.meta.last_page;
        this.isloading = false;
      }
    );
    this.isloading = false;
  }



  delete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      this.soutenirService
        .delete(id)
        .subscribe(() => this.soutenirList = this.soutenirList.filter(item => item.id !== id));
    }
  }
}