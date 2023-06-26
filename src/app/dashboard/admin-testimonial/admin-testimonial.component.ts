import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/models/testimonial-model';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-admin-testimonial',
  templateUrl: './admin-testimonial.component.html',
  styleUrls: ['./admin-testimonial.component.scss']
})
export class AdminTestimonialComponent implements OnInit {

  isloading = false;

  testimonailList: Testimonial[] = [];

  lastPage: number | undefined;

  constructor(private testimonailService: TestimonialService) {}

  ngOnInit(): void {
    this.load(); 
  }

  load(page = 1): void {
    this.isloading = true;
    this.testimonailService.all(page).subscribe(res => {
        this.testimonailList = res.data;
        this.lastPage = res.meta.last_page;
        this.isloading = false;
      }
    );
    this.isloading = false;
  }



  delete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      this.testimonailService
        .delete(id)
        .subscribe(() => this.testimonailList = this.testimonailList.filter(item => item.id !== id));
    }
  }
}