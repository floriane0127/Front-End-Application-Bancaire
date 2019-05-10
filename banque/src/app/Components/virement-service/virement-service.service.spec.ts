import { TestBed } from '@angular/core/testing';

import { VirementServiceService } from './virement-service.service';

describe('VirementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VirementServiceService = TestBed.get(VirementServiceService);
    expect(service).toBeTruthy();
  });
});
