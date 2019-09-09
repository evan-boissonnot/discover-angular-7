import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAddComponent } from './one-add.component';

describe('OneAddComponent', () => {
  let component: OneAddComponent;
  let fixture: ComponentFixture<OneAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
