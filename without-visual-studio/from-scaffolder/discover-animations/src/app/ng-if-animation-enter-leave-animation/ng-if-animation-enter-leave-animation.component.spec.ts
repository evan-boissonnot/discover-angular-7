/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgIfAnimationEnterLeaveAnimationComponent } from './ng-if-animation-enter-leave-animation.component';

describe('NgIfAnimationEnterLeaveAnimationComponent', () => {
  let component: NgIfAnimationEnterLeaveAnimationComponent;
  let fixture: ComponentFixture<NgIfAnimationEnterLeaveAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfAnimationEnterLeaveAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfAnimationEnterLeaveAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
