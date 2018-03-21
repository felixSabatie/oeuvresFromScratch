/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {AdherentsService} from './adherents.service';

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
