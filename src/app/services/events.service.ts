import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends ApiService {

  endpoint: string = `${environment.apiURL}/events`;
}
