import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/models/partner-model';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-admin-partenaire',
  templateUrl: './admin-partenaire.component.html',
  styleUrls: ['./admin-partenaire.component.scss']
})
export class AdminPartenaireComponent implements OnInit {

  isloading = false;

  partnerList: Partner[] = [];

  lastPage: number | undefined;

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.load(); 
  }

  load(page = 1): void {
    this.isloading = true;
    this.partnerService.all(page).subscribe(res => {
        this.partnerList = res.data;
        this.lastPage = res.meta.last_page;
        this.isloading = false;
      }
    );
    this.isloading = false;
  }



  delete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      this.partnerService
        .delete(id)
        .subscribe(() => this.partnerList = this.partnerList.filter(item => item.id !== id));
    }
  }
}