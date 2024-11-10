import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCVComponent } from './form-cv.component';

describe('FormCVComponent', () => {
  let component: FormCVComponent;
  let fixture: ComponentFixture<FormCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCVComponent]
    });
    fixture = TestBed.createComponent(FormCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
