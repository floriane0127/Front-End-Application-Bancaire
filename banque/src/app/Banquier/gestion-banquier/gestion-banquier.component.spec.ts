import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBanquierComponent } from './gestion-banquier.component';

describe('GestionBanquierComponent', () => {
  let component: GestionBanquierComponent;
  let fixture: ComponentFixture<GestionBanquierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionBanquierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBanquierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
