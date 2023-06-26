import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact-model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  id: number | any;

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private contactService: ContactService,
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
      email: [''],
      phone: [''],
      subject: [''],
      message: ['']
    }); 

    this.id = this.route.snapshot.params['id'];
    this.contactService.get(this.id).subscribe(
      (item: Contact) => this.formGroup.patchValue({
        fullname: item.fullname,
        email: item.email,
        phone: item.phone,
        subject: item.subject,
        message: item.message,
        created:item.created,
        update_created: new Date()
      })
    ); 

  } 


  onSubmit() {
    try {
      this.isLoading = true;
      this.contactService
      .update(this.id, this.formGroup.getRawValue())
      .subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-contact']);
      });  
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}
