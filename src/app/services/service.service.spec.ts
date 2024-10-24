import { TestBed } from '@angular/core/testing';

import { shipsService} from './shipsService';

describe('shipService', () => {
  let service: shipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(shipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
