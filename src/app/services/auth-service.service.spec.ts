import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthServiceService', () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
