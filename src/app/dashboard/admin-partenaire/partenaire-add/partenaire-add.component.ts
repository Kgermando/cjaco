import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partenaire-add',
  templateUrl: './partenaire-add.component.html',
  styleUrls: ['./partenaire-add.component.scss']
})
export class PartenaireAddComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private partnerService: PartnerService,
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
      title: ['', Validators.required], 
      image: ['', Validators.required]
    }); 
  } 


  onSubmit() {
    try {
      this.isLoading = true;
      var body = {
        title: this.formGroup.value.title,
        image: this.formGroup.value.image, 
        signature: '-', // this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.partnerService.create(body).subscribe(() => {
        this.isLoading = false;
        this.router.navigate(['/admin/admin-partners']);
      });
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}
