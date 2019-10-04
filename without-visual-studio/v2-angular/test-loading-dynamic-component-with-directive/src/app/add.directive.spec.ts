import { AddDirective } from './add.directive';
import { ViewContainerRef } from '@angular/core';

describe('AddDirective', () => {
  it('should create an instance', () => {
    const directive = new AddDirective(null);
    expect(directive).toBeTruthy();
  });
});
