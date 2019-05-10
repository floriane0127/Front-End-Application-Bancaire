import { TestBed } from '@angular/core/testing';

import { CPTBancaireServiceService } from './cptbancaire-service.service';

describe('CPTBancaireServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CPTBancaireServiceService = TestBed.get(CPTBancaireServiceService);
    expect(service).toBeTruthy();
  });
});
