import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GenreService } from '../../services/music/genre.service';
import { SurveyService } from '../../services/survey/survey.service';
import { SurveyFormWrapperComponent } from './survey-form-wrapper.component';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-results',
  template: '<p>Results</p>'
})
class MockResultComponent {}

const routes: Routes = [
  { path: 'survey' , component: SurveyFormWrapperComponent},
  { path: 'results' , component: MockResultComponent}
];

let surveyServiceMock: jasmine.SpyObj<SurveyService>;

let genreServiceMock: jasmine.SpyObj<GenreService>;

let matSnackBarMock: jasmine.SpyObj<MatSnackBar>;

describe('SurveyFormWrapperComponent', () => {
  let component: SurveyFormWrapperComponent;
  let fixture: ComponentFixture<SurveyFormWrapperComponent>;

  beforeEach(async () => {
   
    surveyServiceMock = jasmine.createSpyObj('SurveyService', ['sendSurvey']);

    genreServiceMock = jasmine.createSpyObj('GenreService', ['fetchMusicalGenre']);

    genreServiceMock.fetchMusicalGenre.and.returnValue(of([]))


    matSnackBarMock = jasmine.createSpyObj('MatSnackBar', ['open']);
    
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ SurveyFormWrapperComponent, MockResultComponent ],
      providers: [
        {provide:SurveyService , useValue: surveyServiceMock },
        {provide:GenreService , useValue: genreServiceMock },
        {provide:MatSnackBar , useValue: matSnackBarMock },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
