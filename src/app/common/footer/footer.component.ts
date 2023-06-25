import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth.service';
import { keyStore } from 'src/app/shared/outils/key_store';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  year = '';

  // currentUser: User | any;

  constructor(private localService: LocalService, 
    private authService: AuthService) {
     this.year = formatDate(new Date(), 'yyyy', 'en'); 
  }

  ngOnInit(): void {
    // var userId: any = this.localService.getData(keyStore.auth)
    //   this.authService.user(parseInt(userId)).subscribe(
    //     res => {
    //         this.currentUser = res; 
    //     }
    //   );
  }
}
