import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReutilsableComponent } from './reutilsable.component';

describe('ReutilsableComponent', () => {
  let component: ReutilsableComponent;
  let fixture: ComponentFixture<ReutilsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReutilsableComponent]
    });
    fixture = TestBed.createComponent(ReutilsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
