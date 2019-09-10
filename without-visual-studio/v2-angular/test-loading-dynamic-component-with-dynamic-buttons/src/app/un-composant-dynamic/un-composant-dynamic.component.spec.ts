import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnComposantDynamicComponent } from './un-composant-dynamic.component';

describe('UnComposantDynamicComponent', () => {
  let component: UnComposantDynamicComponent;
  let fixture: ComponentFixture<UnComposantDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnComposantDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnComposantDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
