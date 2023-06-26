import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.scss']
})
export class ActivityAddComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any; 

  public Editor = ClassicEditor;

  // currentUser: User | any; 

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private activityService: ActivityService,
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
      image: ['', Validators.required],
      content: ['', Validators.required],
      redaction: ['', Validators.required]
    }); 
  } 


  onSubmit() {
    try {
      this.isLoading = true;
      var body = {
        title: this.formGroup.value.title,
        image: this.formGroup.value.image,
        content: this.formGroup.value.content,
        redaction: this.formGroup.value.redaction,
        signature: '-', // this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.activityService.create(body).subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-activity']);
      });
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
 

}
