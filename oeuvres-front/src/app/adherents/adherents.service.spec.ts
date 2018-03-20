/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdherentsService } from './adherents.service';

describe('AdherentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdherentsService]
    });
  });

  it('should ...', inject([AdherentsService], (service: AdherentsService) => {
    expect(service).toBeTruthy();
  }));
});
