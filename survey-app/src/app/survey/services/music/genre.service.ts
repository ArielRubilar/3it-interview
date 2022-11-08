import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreAdapterService } from './genre-adapter.service';
import { IMusicalGenre, IMusicalGenreApi } from './models/musical-genre.interface';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private baseUrl = environment.api.baseUrl

  private paths = environment.api.paths

  constructor(
    private http: HttpClient,
    private genreAdapter: GenreAdapterService
  ) { }

  fetchMusicalGenre(): Observable<IMusicalGenre[]> {
    return this.http.get<IMusicalGenreApi[]>(`${this.baseUrl}${this.paths.musicalGenres}`).pipe(
      map( g => g.map(this.genreAdapter.adapt))
    )
  }
}
