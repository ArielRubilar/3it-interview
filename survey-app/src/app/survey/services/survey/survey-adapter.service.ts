import { Injectable } from '@angular/core';
import { GenreAdapterService } from '../music/genre-adapter.service';
import { ISurveyTotal, ISurveyTotalApi } from './models/survey-totals.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveyAdapterService {

  constructor(
  ) { }

  adaptTotal(surveyTotal :ISurveyTotalApi): ISurveyTotal {
    return {
      total: surveyTotal.total,
      genre: { id: surveyTotal.genre.id , name : surveyTotal.genre.name }
    }
  }
}
