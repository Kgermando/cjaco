import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimateurService } from 'src/app/services/animateur.service';

@Component({
  selector: 'app-animateur-add',
  templateUrl: './animateur-add.component.html',
  styleUrls: ['./animateur-add.component.scss']
})
export class AnimateurAddComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private animateurService: AnimateurService,
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
      title: ['', Validators.required],
      image: ['', Validators.required],
      content: ['', Validators.required],
      facebook: ['', Validators.required],
      linkedin: ['', Validators.required],
      twitter: ['', Validators.required],
      instagram: ['', Validators.required]
      
      
    }); 
  } 


  onSubmit() {
    try {
      this.isLoading = true;
      var body = {
        fullname: this.formGroup.value.fullname,
        title: this.formGroup.value.title,
        image: this.formGroup.value.image,
        content: this.formGroup.value.content,
        facebook: this.formGroup.value.facebook,
        linkedin: this.formGroup.value.linkedin,
        twitter: this.formGroup.value.twitter,
        instagram: this.formGroup.value.instagram,
        signature: '-', // this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.animateurService.create(body).subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-animateur']);
      });
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
 

}
