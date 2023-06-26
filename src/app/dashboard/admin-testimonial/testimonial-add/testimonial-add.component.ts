import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-testimonial-add',
  templateUrl: './testimonial-add.component.html',
  styleUrls: ['./testimonial-add.component.scss']
})
export class TestimonialAddComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any;
 

  // currentUser: User | any; 

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private testimonialService: TestimonialService,
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
      fullname: ['', Validators.required],
      title: ['', Validators.required],
      image: [''],
      comment: ['', Validators.required]
    }); 
  } 


  onSubmit() {
    try {
      this.isLoading = true;
      var body = {
        fullname: this.formGroup.value.fullname,
        title: this.formGroup.value.title, 
        image: this.formGroup.value.image,
        comment: this.formGroup.value.comment,
        signature: '-', // this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.testimonialService.create(body).subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-testimonials']);
      });
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
 
}
