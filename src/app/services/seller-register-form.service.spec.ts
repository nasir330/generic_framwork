import { TestBed } from '@angular/core/testing';

import { SellerRegisterFormService } from './seller-register-form.service';

describe('SellerRegisterFormService', () => {
  let service: SellerRegisterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerRegisterFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
