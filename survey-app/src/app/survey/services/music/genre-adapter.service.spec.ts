import { TestBed } from '@angular/core/testing';

import { GenreAdapterService } from './genre-adapter.service';
import { IMusicalGenre, IMusicalGenreApi } from './models/musical-genre.interface';

describe('GenreAdapterService', () => {
  let service: GenreAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should adapt Genre Correctly', () => {
    const genreApi: IMusicalGenreApi = { id: '123' , name: 'ROCK'};
    const genreMapped = service.adapt(genreApi)

    const genre: IMusicalGenre =  { id: '123' , name: 'ROCK'};
    expect(genreMapped).toEqual(genre)
  })
});
