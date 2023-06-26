import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { ActivityService } from '../services/activity.service';
import { AnimateurService } from '../services/animateur.service';
import { EventsService } from '../services/events.service';
import { NewsletterService } from '../services/newsletter.service';
import { PartnerService } from '../services/partner.service';
import { SoutenirService } from '../services/soutenir.service';
import { TestimonialService } from '../services/testimonial.service';
import { UserService } from '../services/user.service';
import { Activity } from '../models/activity-model';
import { Animateur } from '../models/animateur-model';
import { Contact } from '../models/contact-model';
import { Events } from '../models/events-model';
import { NewsLetter } from '../models/newsletter-model';
import { Partner } from '../models/partner-model';
import { Soutenir } from '../models/soutenir-model'; 
import { User } from '../models/user-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  activityList: Activity[] = [];
  animateurList: Animateur[] = [];
  contactList: Contact[] = [];
  eventList: Events[] = [];
  newsletterList: NewsLetter[] = [];
  partnerList: Partner[] = [];
  soutenirList: Soutenir[] = [];
  // testimonailList: Testimonial[] = [];
  userList: User[] = [];


  totalContact: number = 0;
  totalPartenaires: number = 0;
  totalAnimateurs: number = 0;
  totalUtilisateurs: number = 0;
  totalNewsLetters: number = 0;
  totalEvenements: number = 0;
  totalSoutiens: number = 0;
  totalActivite: number = 0;



    constructor(
      public router: Router,
      private contactService: ContactService,
      private activityService: ActivityService,
      private animateurService: AnimateurService,
      private eventService: EventsService,
      private newsletterService: NewsletterService,
      private partnerService: PartnerService,
      private soutenirService: SoutenirService,
      // private testimonailService: TestimonialService,
      private userService: UserService
  ) { }


  ngOnInit(): void {
    this.contactService.allData().subscribe(contact => {
      this.contactList = contact;
      this.totalContact = this.contactList.length;
    });
    this.activityService.allData().subscribe(activity => {
      this.activityList = activity;
      this.totalActivite = this.activityList.length;
    });
    this.animateurService.allData().subscribe(animateur => {
      this.animateurList = animateur;
      this.totalAnimateurs = this.animateurList.length;
    });
    this.eventService.allData().subscribe(event => {
      this.eventList = event;
      this.totalSoutiens = this.eventList.length; 
    });
    this.newsletterService.allData().subscribe(newsletter => {
      this.newsletterList = newsletter;
      this.totalNewsLetters = this.newsletterList.length;
    });
    this.partnerService.allData().subscribe(partner => {
      this.partnerList = partner;
      this.totalPartenaires = this.partnerList.length;
    });
    this.soutenirService.allData().subscribe(soutenir => {
      this.soutenirList = soutenir;
      this.totalSoutiens = this.soutenirList.length;
    });
    this.userService.allData().subscribe(user => {
      this.userList = user;
      this.totalUtilisateurs = this.userList.length;
    });  
  }
}
