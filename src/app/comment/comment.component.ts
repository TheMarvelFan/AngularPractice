import {Component, OnInit} from '@angular/core';
import {CommentService} from './comment.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';

@Component({
  selector: 'app-comment',
  standalone: false,
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  comments$;
  comment$;
  comments!: Comment[];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.comments$ = this.commentService.getComments();
    this.comment$ = this.activatedRoute.data.pipe(
      map(data => data['comments'])
    );
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.comments = data['comments'];
    });
  }
}
