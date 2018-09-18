import { TestBed, inject } from '@angular/core/testing';

import { NgxImagesloadedService } from './ngx-imagesloaded.service';

describe('NgxImagesloadedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxImagesloadedService]
    });
  });

  it('should be created', inject([NgxImagesloadedService], (service: NgxImagesloadedService) => {
    expect(service).toBeTruthy();
  }));
});
