import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent  implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  id: number | any;

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private userService: UserService,
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
      telephone: ['']
    }); 

    this.id = this.route.snapshot.params['id'];
    this.userService.get(this.id).subscribe(
      (item: User) => this.formGroup.patchValue({
        fullname: item.fullname,
        email: item.email,
        telephone: item.telephone,
        role: item.role,
        signature: item.signature,
        created:item.created,
        update_created: new Date()
      })
    ); 

  } 


  onSubmit() {
    try {
      this.isLoading = true;
      this.userService
      .update(this.id, this.formGroup.getRawValue())
      .subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-users']);
      });  
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}