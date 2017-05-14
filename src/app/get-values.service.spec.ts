import { TestBed, inject } from '@angular/core/testing';

import { GetValuesService } from './get-values.service';

describe('GetValuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetValuesService]
    });
  });

  it('should ...', inject([GetValuesService], (service: GetValuesService) => {
    expect(service).toBeTruthy();
  }));
});
