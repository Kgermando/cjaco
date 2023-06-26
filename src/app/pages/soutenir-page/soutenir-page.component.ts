import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SoutenirService } from 'src/app/services/soutenir.service';

@Component({
  selector: 'app-soutenir-page',
  templateUrl: './soutenir-page.component.html',
  styleUrls: ['./soutenir-page.component.scss']
})
export class SoutenirPageComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any;  

  isSend: boolean = false;

  constructor(
    private _formBuilder: FormBuilder, 
    private soutenirService: SoutenirService,
    private router: Router
  ) {
  }

  ngOnInit(): void { 
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
          this.isSend = true;
          this.router.navigate(['/soutenir']);
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
