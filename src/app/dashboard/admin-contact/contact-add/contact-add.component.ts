import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private contactService: ContactService,
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
      email: ['', Validators.required],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    }); 
  } 


  onSubmit() {
    try {
      this.isLoading = true;
      var body = {
        fullname: this.formGroup.value.fullname,
        email: this.formGroup.value.email,
        phone: this.formGroup.value.phone,
        subject: this.formGroup.value.subject,
        message: this.formGroup.value.message,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.contactService.create(body).subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-contact']);
      });
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }

}
