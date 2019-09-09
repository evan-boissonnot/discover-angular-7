import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoAddComponent } from './two-add.component';

describe('TwoAddComponent', () => {
  let component: TwoAddComponent;
  let fixture: ComponentFixture<TwoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
