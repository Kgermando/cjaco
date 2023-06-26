import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Activity } from 'src/app/models/activity-model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any;

  public Editor = ClassicEditor;

  // currentUser: User | any; 

  id: number | any;

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private activityService: ActivityService,
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
      image: [''],
      content: [''],
      redaction: ['']
    }); 

    this.id = this.route.snapshot.params['id'];
    this.activityService.get(this.id).subscribe(
      (item: Activity) => this.formGroup.patchValue({
        title: item.title,
        image: item.image,
        content: item.content,
        redaction: item.redaction,
        signature: item.signature,
        created:item.created,
        update_created: new Date()
      })
    ); 

  } 


  onSubmit() {
    try {
      this.isLoading = true;
      this.activityService
      .update(this.id, this.formGroup.getRawValue())
      .subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-activity']);
      });  
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }

}
