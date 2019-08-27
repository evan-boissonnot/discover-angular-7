import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAnimationWithWildCardComponent } from './first-animation.component';

describe('FirstAnimationComponent', () => {
  let component: FirstAnimationWithWildCardComponent;
  let fixture: ComponentFixture<FirstAnimationWithWildCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAnimationWithWildCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAnimationWithWildCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
