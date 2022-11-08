import { TestBed } from '@angular/core/testing';
import { ISurveyTotal, ISurveyTotalApi } from './models/survey-totals.interface';

import { SurveyAdapterService } from './survey-adapter.service';

describe('SurveyAdapterService', () => {
  let service: SurveyAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should adapt survey result correctly', () => {

    const surveyTotalApi: ISurveyTotalApi = { total: 10 , genre: { id: '1' , name: 'ROCK'}};

    const surveyTotalAdapted = service.adaptTotal(surveyTotalApi);

    const surveyTotal: ISurveyTotal = { total: 10 , genre: { id: '1' , name: 'ROCK'}};

    expect(surveyTotalAdapted).toEqual(surveyTotal);
  })
});
