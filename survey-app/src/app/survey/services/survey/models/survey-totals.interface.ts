import { IMusicalGenre, IMusicalGenreApi } from "../../music/models/musical-genre.interface";

export interface ISurveyTotalApi {
  genre:IMusicalGenreApi,
  total: number
}

export interface ISurveyTotal {
  genre:IMusicalGenre,
  total: number
}