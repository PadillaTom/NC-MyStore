import { TestBed } from '@angular/core/testing';

import { RegisterCustomService } from './register-custom.service';

describe('RegisterCustomService', () => {
  let service: RegisterCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
