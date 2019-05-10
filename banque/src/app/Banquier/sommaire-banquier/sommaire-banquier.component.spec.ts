import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SommaireBanquierComponent } from './sommaire-banquier.component';

describe('SommaireBanquierComponent', () => {
  let component: SommaireBanquierComponent;
  let fixture: ComponentFixture<SommaireBanquierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SommaireBanquierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SommaireBanquierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
