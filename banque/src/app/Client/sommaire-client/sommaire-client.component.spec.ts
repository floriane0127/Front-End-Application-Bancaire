import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SommaireClientComponent } from './sommaire-client.component';

describe('SommaireClientComponent', () => {
  let component: SommaireClientComponent;
  let fixture: ComponentFixture<SommaireClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SommaireClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SommaireClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
