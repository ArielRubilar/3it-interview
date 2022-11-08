import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { ISurveyTotal, ISurveyTotalApi } from './models/survey-totals.interface';
import { SurveyAdapterService } from './survey-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  
  private baseUrl = environment.api.baseUrl

  private paths = environment.api.paths

  constructor(
    private http: HttpClient,
    private surveyAdapter: SurveyAdapterService
  ) { }

  sendSurvey( email: string , genreId: string ):Observable<{surveyId:string}>{
    return this.http.post<{surveyId:string}>(`${this.baseUrl}${this.paths.surveys}`, { email , genreId })
  } 

  getSurveyTotals( ):Observable<ISurveyTotal[]> {
    return this.http
      .get<ISurveyTotalApi[]>(`${this.baseUrl}${this.paths.surveys}${this.paths.totals}`)
      .pipe(
        map( totals => totals.map(this.surveyAdapter.adaptTotal))
      )
  }
}
