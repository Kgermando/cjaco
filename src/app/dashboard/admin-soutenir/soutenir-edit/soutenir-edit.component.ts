import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Soutenir } from 'src/app/models/soutenir-model';
import { SoutenirService } from 'src/app/services/soutenir.service';

@Component({
  selector: 'app-soutenir-edit',
  templateUrl: './soutenir-edit.component.html',
  styleUrls: ['./soutenir-edit.component.scss']
})
export class SoutenirEditComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  id: number | any;

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private soutenirService: SoutenirService,
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
      objet: [''],
      montant: [''],
      type_paiement: ['']
    }); 

    this.id = this.route.snapshot.params['id'];
    this.soutenirService.get(this.id).subscribe(
      (item: Soutenir) => this.formGroup.patchValue({
        fullname: item.fullname,
        objet: item.objet,
        montant: item.montant,
        type_paiement: item.type_paiement,
        signature: item.signature,
        created:item.created,
        update_created: new Date()
      })
    ); 

  } 


  onSubmit() {
    try {
      this.isLoading = true;
      this.soutenirService
      .update(this.id, this.formGroup.getRawValue())
      .subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-soutenir']);
      });  
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}
