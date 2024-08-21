import { TestBed } from '@angular/core/testing';

import { ProdDataService } from './prod-data.service';

describe('ProdDataService', () => {
  let service: ProdDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
