import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Events } from 'src/app/models/events-model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {
  isLoading: boolean = false; 
  formGroup: FormGroup | any;

  public Editor = ClassicEditor;

  // currentUser: User | any; 

  id: number | any;

  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    // private localService: LocalService,
    private eventService: EventsService,
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
      start_date: [''],
      end_date: [''],
      adress: [''],
      image: [''],
      content: ['']
    }); 

    this.id = this.route.snapshot.params['id'];
    this.eventService.get(this.id).subscribe(
      (item: Events) => this.formGroup.patchValue({
        title: item.title,
        start_date: item.start_date,
        end_date: item.end_date,
        adress: item.adress,
        image: item.image,
        content: item.content,
        signature: item.signature,
        created:item.created,
        update_created: new Date()
      })
    ); 

  } 


  onSubmit() {
    try {
      this.isLoading = true;
      this.eventService
      .update(this.id, this.formGroup.getRawValue())
      .subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/admin/admin-events']);
      });  
      this.isLoading = true;
    } catch (error) {
      console.log(error);
    }
  }
}
