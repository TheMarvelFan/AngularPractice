import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('CommentService', () => {
  let service: CommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()]
    });
    service = TestBed.inject(CommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
