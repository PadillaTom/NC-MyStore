import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Not403Component } from './not403.component';

describe('Not403Component', () => {
  let component: Not403Component;
  let fixture: ComponentFixture<Not403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Not403Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Not403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
