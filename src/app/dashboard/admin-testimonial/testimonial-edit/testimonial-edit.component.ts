import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Testimonial } from 'src/app/models/testimonial-model';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-testimonial-edit',
  templateUrl: './testimonial-edit.component.html',
  styleUrls: ['./testimonial-edit.component.scss']
})
export class TestimonialEditComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  id: number | any;

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private testimonialService: TestimonialService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // var userId: any = this.localService.getData(keyStore.auth)
    //   this.authService.user(parseInt(userId)).subscribe(
    //     res => {
    //         this.currentUser = res; 
    //     }
    //   );

    this.formGroup = this._formBuilder.group({
      fullname: [''],
      title: [''],
      image: [''],
      comment: ['']
    }); 

    this.id = this.route.snapshot.params['id'];
    this.testimonialService.get(this.id).subscribe(
      (item: Testimonial) => this.formGroup.patchValue({
        fullname: item.fullname,
        title: item.title,
        image: item.image,
        comment: item.comment,
        signature: item.signature,
        created:item.created,
        update_created: new Date()
      })
    ); 

  } 


  onSubmit() {
    try {
      this.isLoading = true;
      this.testimonialService
      .update(this.id, this.formGroup.getRawValue())
      .subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-testimonials']);
      });  
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}
