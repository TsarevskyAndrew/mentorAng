import { TestBed } from '@angular/core/testing';

import { TopCoursesService } from './top-courses.service';

describe('TopCoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopCoursesService = TestBed.get(TopCoursesService);
    expect(service).toBeTruthy();
  });
});
