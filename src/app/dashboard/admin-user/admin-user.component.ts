import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  isloading = false;

  userList: User[] = [];

  lastPage: number | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.load(); 
  }

  load(page = 1): void {
    this.isloading = true;
    this.userService.all(page).subscribe(res => {
        this.userList = res.data;
        this.lastPage = res.meta.last_page;
        this.isloading = false;
      }
    );
    this.isloading = false;
  }



  delete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      this.userService
        .delete(id)
        .subscribe(() => this.userList = this.userList.filter(item => item.id !== id));
    }
  }
}