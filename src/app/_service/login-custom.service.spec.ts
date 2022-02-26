import { TestBed } from '@angular/core/testing';

import { LoginCustomService } from './login-custom.service';

describe('LoginCustomService', () => {
  let service: LoginCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
