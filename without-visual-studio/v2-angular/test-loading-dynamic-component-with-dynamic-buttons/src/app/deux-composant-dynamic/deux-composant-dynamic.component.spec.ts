import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxComposantDynamicComponent } from './deux-composant-dynamic.component';

describe('DeuxComposantDynamicComponent', () => {
  let component: DeuxComposantDynamicComponent;
  let fixture: ComponentFixture<DeuxComposantDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuxComposantDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuxComposantDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
