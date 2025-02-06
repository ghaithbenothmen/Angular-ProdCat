import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('div'));
    const renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);
    const directive = new HighlightDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
