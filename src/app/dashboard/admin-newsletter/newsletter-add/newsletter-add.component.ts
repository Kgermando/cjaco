import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-newsletter-add',
  templateUrl: './newsletter-add.component.html',
  styleUrls: ['./newsletter-add.component.scss']
})
export class NewsletterAddComponent implements OnInit{
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private newsletterService: NewsletterService,
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
      email: ['', Validators.required],
    }); 
  } 


  onSubmit() {
    try {
      this.isLoading = true;
      var body = {
        email: this.formGroup.value.email, 
        signature: '-', // this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.newsletterService.create(body).subscribe(() => {
        this.isLoading = false;
        this.router.navigate(['/admin/admin-newsletter']);
      });
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}
