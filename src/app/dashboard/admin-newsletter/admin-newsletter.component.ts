import { Component, OnInit } from '@angular/core';
import { NewsLetter } from 'src/app/models/newsletter-model';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-admin-newsletter',
  templateUrl: './admin-newsletter.component.html',
  styleUrls: ['./admin-newsletter.component.scss']
})
export class AdminNewsletterComponent implements OnInit {

  isloading = false;

  newsletterList: NewsLetter[] = [];

  lastPage: number | undefined;

  constructor(private newsletterService: NewsletterService) {}

  ngOnInit(): void {
    this.load(); 
  }

  load(page = 1): void {
    this.isloading = true;
    this.newsletterService.all(page).subscribe(res => {
        this.newsletterList = res.data;
        this.lastPage = res.meta.last_page;
        this.isloading = false;
      }
    );
    this.isloading = false;
  }



  delete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      this.newsletterService
        .delete(id)
        .subscribe(() => this.newsletterList = this.newsletterList.filter(item => item.id !== id));
    }
  }
}