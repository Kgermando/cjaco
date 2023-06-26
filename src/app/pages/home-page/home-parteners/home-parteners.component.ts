import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partner } from 'src/app/models/partner-model';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-home-parteners',
  templateUrl: './home-parteners.component.html',
  styleUrls: ['./home-parteners.component.scss']
})
export class HomePartenersComponent implements OnInit {

    partnerList: Partner[] = [];

    lastPage: number | any; 

  constructor(
    public router: Router,
    private partnerService: PartnerService
    ) { }


    ngOnInit(): void {
        this.load();
    }
    
    load(page = 1) {
        this.partnerService.all(page).subscribe(res => {
            this.partnerList = res.data;
            this.lastPage = res.meta.last_page;
        }
        );
    } 

}
