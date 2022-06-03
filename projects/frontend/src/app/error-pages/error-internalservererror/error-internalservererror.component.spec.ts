import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInternalservererrorComponent } from './error-internalservererror.component';

describe('ErrorInternalservererrorComponent', () => {
  let component: ErrorInternalservererrorComponent;
  let fixture: ComponentFixture<ErrorInternalservererrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInternalservererrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInternalservererrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
