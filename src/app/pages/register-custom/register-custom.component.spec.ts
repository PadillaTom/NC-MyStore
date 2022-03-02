import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomComponent } from './register-custom.component';

describe('RegisterCustomComponent', () => {
  let component: RegisterCustomComponent;
  let fixture: ComponentFixture<RegisterCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
