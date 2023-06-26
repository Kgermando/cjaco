import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any;  
  isSend: boolean = false;

  constructor(
    private _formBuilder: FormBuilder, 
    private contactService: ContactService,
    private router: Router
  ) {
  }

  ngOnInit(): void { 
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
          this.isSend = true;
          this.router.navigate(['/contact']); 
      });
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }

  dismissAlert4() {
    this.isSend = false;
  }
}
