import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SoutenirService } from 'src/app/services/soutenir.service';

@Component({
  selector: 'app-soutenir-add',
  templateUrl: './soutenir-add.component.html',
  styleUrls: ['./soutenir-add.component.scss']
})
export class SoutenirAddComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private soutenirService: SoutenirService,
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
      objet: ['', Validators.required],
      montant: ['', Validators.required],
      type_paiement: ['', Validators.required]
    }); 
  } 


  onSubmit() {
    try {
      this.isLoading = true;
      var body = {
        fullname: this.formGroup.value.fullname,
        objet: this.formGroup.value.objet,
        montant: this.formGroup.value.montant,
        type_paiement: this.formGroup.value.type_paiement,
        signature: '-', // this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.soutenirService.create(body).subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-soutenir']);
      });
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}
