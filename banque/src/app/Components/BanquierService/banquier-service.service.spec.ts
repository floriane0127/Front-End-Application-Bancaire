import { TestBed } from '@angular/core/testing';

import { BanquierServiceService } from './banquier-service.service';

describe('BanquierServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanquierServiceService = TestBed.get(BanquierServiceService);
    expect(service).toBeTruthy();
  });
});
