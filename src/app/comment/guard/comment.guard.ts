import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';
import {CommentService} from '../comment.service';
import {Observable} from 'rxjs';
import {Comment} from '../Comment';

export const commentGuard: ResolveFn<Comment[]> = (route, state) => {
  // this guard is used to delay loading of view (page) till all the data from an API is loaded

  const commentService = inject(CommentService);

  const resolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]>  => {
    return commentService.getComments();
  };

  return resolve(route, state);
};
