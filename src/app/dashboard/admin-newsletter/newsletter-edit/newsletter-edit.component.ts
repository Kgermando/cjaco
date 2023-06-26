import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsLetter } from 'src/app/models/newsletter-model';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-newsletter-edit',
  templateUrl: './newsletter-edit.component.html',
  styleUrls: ['./newsletter-edit.component.scss']
})
export class NewsletterEditComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  id: number | any;

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private newsletterService: NewsletterService,
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
      email: [''],
    }); 

    this.id = this.route.snapshot.params['id'];
    this.newsletterService.get(this.id).subscribe(
      (item: NewsLetter) => this.formGroup.patchValue({
        email: item.email,
        created:item.created,
        update_created: new Date()
      })
    ); 

  } 


  onSubmit() {
    try {
      this.isLoading = true;
      this.newsletterService
      .update(this.id, this.formGroup.getRawValue())
      .subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-newsletter']);
      });  
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}
