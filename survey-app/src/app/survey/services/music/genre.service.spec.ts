import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GenreService } from './genre.service';
import { IMusicalGenreApi } from './models/musical-genre.interface';
import { GenreAdapterService } from './genre-adapter.service';

describe('GenreService', () => {
  let service: GenreService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenreAdapterService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GenreService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Genres', () => {

    const dummyGenres: IMusicalGenreApi[] = [
      {id: '1' , name: 'Rock'},
      {id: '2' , name: 'Metal'}
    ];
    service.fetchMusicalGenre().subscribe(genres => {
        expect(genres.length).toBe(2);
        expect(genres).toEqual(dummyGenres);
    });
    const request = httpTestingController.expectOne( `http://localhost:8080/genres`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyGenres);
  })
});
