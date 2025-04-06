import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:8080/api/v1/users';

  submitForm(userData: any) {
    // return this.http.post(this.apiUrl, userData);
    console.log('Form Submitted:', userData);
  }
}
