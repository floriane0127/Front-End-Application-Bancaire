import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCVComponent } from './global-cv.component';

describe('GlobalCVComponent', () => {
  let component: GlobalCVComponent;
  let fixture: ComponentFixture<GlobalCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
