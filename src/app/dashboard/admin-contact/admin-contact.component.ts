import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact-model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {

  isloading = false;

  contactList: Contact[] = [];

  lastPage: number | undefined;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.load(); 
  }

  load(page = 1): void {
    this.isloading = true;
    this.contactService.all(page).subscribe(res => {
        this.contactList = res.data;
        this.lastPage = res.meta.last_page;
        this.isloading = false;
      }
    );
    this.isloading = false;
  }



  delete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      this.contactService
        .delete(id)
        .subscribe(() => this.contactList = this.contactList.filter(item => item.id !== id));
    }
  }
}