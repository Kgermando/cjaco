import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UploadComponent } from './components/upload/upload.component';
import { PaginatorComponent } from './components/paginator/paginator.component';



@NgModule({
  declarations: [
    UploadComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UploadComponent,
    PaginatorComponent
  ], 
})
export class SharedModule { }
