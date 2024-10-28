import { TestBed } from '@angular/core/testing';

import { shipsService} from './shipsService';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('shipService', () => {
  let service: shipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]});
    service = TestBed.inject(shipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
