import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { EventsService } from 'src/app/services/events.service'; 

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent {
  isLoading: boolean = false; 
  formGroup: FormGroup | any;

  public Editor = ClassicEditor;

  // currentUser: User | any; 

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private eventService: EventsService,
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
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      adress: ['', Validators.required],
      image: [''],
      content: ['', Validators.required]
    }); 
  } 


  onSubmit() {
    try {
      this.isLoading = true;
      var body = {
        title: this.formGroup.value.title,
        start_date: this.formGroup.value.start_date,
        end_date: this.formGroup.value.end_date,
        adress: this.formGroup.value.adress,
        image: this.formGroup.value.image,
        content: this.formGroup.value.content,
        signature: '-', // this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.eventService.create(body).subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-events']);
      });
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
 
}
