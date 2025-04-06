import { TestBed } from '@angular/core/testing';

import { ConnectToApiService } from './connect-to-api.service';

describe('ConnectToApiService', () => {
  let service: ConnectToApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectToApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
