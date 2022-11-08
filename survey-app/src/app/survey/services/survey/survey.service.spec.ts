import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ISurveyTotal, ISurveyTotalApi } from './models/survey-totals.interface';
import { SurveyAdapterService } from './survey-adapter.service';

import { SurveyService } from './survey.service';

describe('SurveyService', () => {
  let service: SurveyService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyAdapterService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SurveyService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get survey totals', () => {

    const total: ISurveyTotal = { total: 10 , genre: { id: '1' , name: 'ROCK'} }

    const dummyResponse: ISurveyTotalApi [] = [
      { total: 19 , genre: { id: '3' , name: 'METAL'} },
      { total: 90 , genre: { id: '55' , name: 'JAZZ'} },
      { total: 23 , genre: { id: '1' , name: 'POP'} },
      { total: 10 , genre: { id: '1' , name: 'ROCK'} }
    ]
    service.getSurveyTotals().subscribe( totals=> {
      expect(totals.length).toBe(4);
      expect(totals[3]).toEqual(total)
    })

    const req = httpTestingController.expectOne('http://localhost:8080/surveys/totals')

    expect(req.request.method).toBe('GET')
    req.flush(dummyResponse)
  })

  it('should create survey', () => {

    service.sendSurvey('test@mail.com', '1').subscribe( response => {
      expect(response.surveyId).toBe('1234567');
    })

    const req = httpTestingController.expectOne('http://localhost:8080/surveys')

    expect(req.request.method).toBe('POST')
    req.flush({surveyId: '1234567'})
  })
});
