import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Partner } from 'src/app/models/partner-model';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partenaire-edit',
  templateUrl: './partenaire-edit.component.html',
  styleUrls: ['./partenaire-edit.component.scss']
})
export class PartenaireEditComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  id: number | any;

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private partnerService: PartnerService,
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
      title: [''],
      image: ['']
    }); 

    this.id = this.route.snapshot.params['id'];
    this.partnerService.get(this.id).subscribe(
      (item: Partner) => this.formGroup.patchValue({
        title: item.title,
        image: item.image, 
        signature: item.signature,
        created:item.created,
        update_created: new Date()
      })
    ); 

  } 


  onSubmit() {
    try {
      this.isLoading = true;
      this.partnerService
      .update(this.id, this.formGroup.getRawValue())
      .subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-partners']);
      });  
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}
