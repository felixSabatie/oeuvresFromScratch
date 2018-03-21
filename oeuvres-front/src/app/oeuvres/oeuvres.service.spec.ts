import {inject, TestBed} from '@angular/core/testing';

import {OeuvresService} from './oeuvres.service';

describe('OeuvresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OeuvresService]
    });
  });

  it('should be created', inject([OeuvresService], (service: OeuvresService) => {
    expect(service).toBeTruthy();
  }));
});
