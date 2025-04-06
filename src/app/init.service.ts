import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  config: any;

  constructor(private http: HttpClient) { }

  init() {
     return this.http
       .get('/public/config.json')
       .pipe();
  }
}
