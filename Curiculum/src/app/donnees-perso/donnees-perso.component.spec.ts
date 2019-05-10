import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesPersoComponent } from './donnees-perso.component';

describe('DonneesPersoComponent', () => {
  let component: DonneesPersoComponent;
  let fixture: ComponentFixture<DonneesPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonneesPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
