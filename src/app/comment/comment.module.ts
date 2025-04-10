import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import {provideHttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class CommentModule { }
