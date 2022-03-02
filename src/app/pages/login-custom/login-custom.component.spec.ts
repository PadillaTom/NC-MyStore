import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCustomComponent } from './login-custom.component';

describe('LoginCustomComponent', () => {
  let component: LoginCustomComponent;
  let fixture: ComponentFixture<LoginCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginCustomComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
