import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPagenotfoundComponent } from './error-pagenotfound.component';

describe('ErrorPagenotfoundComponent', () => {
  let component: ErrorPagenotfoundComponent;
  let fixture: ComponentFixture<ErrorPagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPagenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
