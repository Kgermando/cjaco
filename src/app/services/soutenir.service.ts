import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SoutenirService extends ApiService {

  endpoint: string = `${environment.apiURL}/soutenirs`;
}

