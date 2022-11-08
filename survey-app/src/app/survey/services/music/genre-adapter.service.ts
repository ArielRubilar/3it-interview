import { Injectable } from '@angular/core';
import { IMusicalGenre, IMusicalGenreApi } from './models/musical-genre.interface';

@Injectable({
  providedIn: 'root'
})
export class GenreAdapterService {

  constructor() { }

  adapt( genreApi: IMusicalGenreApi) : IMusicalGenre {

    return {
      id: genreApi.id,
      name: genreApi.name
    }
  }
}
