import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  // currentUser: User | any; 

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private userService: UserService,
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
      email: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  } 


  onSubmit() {
    try {
      this.isLoading = true;
      var body = {
        fullname: this.formGroup.value.fullname,
        email: this.formGroup.value.email,
        telephone: this.formGroup.value.telephone,
        role: 'User',
        signature: '-', // this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.userService.create(body).subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-users']);
      });
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}
