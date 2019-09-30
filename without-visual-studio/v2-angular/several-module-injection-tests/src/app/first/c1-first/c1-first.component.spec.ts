import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1FirstComponent } from './c1-first.component';

describe('C1FirstComponent', () => {
  let component: C1FirstComponent;
  let fixture: ComponentFixture<C1FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1FirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
