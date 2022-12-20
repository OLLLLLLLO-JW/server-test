import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  apiUrl = "zzapp.zapto.org:3221";
  constructor(private httpClient: HttpClient) { }

  sendGetRequest() {
    return this.httpClient.get(this.apiUrl);
  }
  
  }


