import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animateur } from 'src/app/models/animateur-model';
import { AnimateurService } from 'src/app/services/animateur.service';

@Component({
  selector: 'app-animateur-edit',
  templateUrl: './animateur-edit.component.html',
  styleUrls: ['./animateur-edit.component.scss']
})
export class AnimateurEditComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  id: number | any;

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private animateurService: AnimateurService,
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
      title: [''],
      image: [''],
      content: [''],
      facebook: [''],
      linkedin: [''],
      twitter: [''],
      instagram: ['']
    }); 

    this.id = this.route.snapshot.params['id'];
    this.animateurService.get(this.id).subscribe(
      (item: Animateur) => this.formGroup.patchValue({
        fullname: item.fullname,
        title: item.title,
        image: item.image,
        content: item.content,
        facebook: item.facebook,
        linkedin: item.linkedin,
        twitter: item.twitter,
        instagram: item.instagram,
        signature: item.signature,
        created:item.created,
        update_created: new Date()
      })
    ); 

  } 


  onSubmit() {
    try {
      this.isLoading = true;
      this.animateurService
      .update(this.id, this.formGroup.getRawValue())
      .subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-animateur']);
      });  
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }

}
