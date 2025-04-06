import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from './Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.co/comments`);
  }
}
