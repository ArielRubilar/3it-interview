import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GenreService } from '../../services/music/genre.service';
import { SurveyService } from '../../services/survey/survey.service';
import { SurveyFormWrapperComponent } from './survey-form-wrapper.component';
import { Component } from '@angular/core';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-results',
  template: '<p>Results</p>'
})
class MockResultComponent {}

const routes: Routes = [
  { path: 'survey' , component: SurveyFormWrapperComponent},
  { path: 'results' , component: MockResultComponent}
];

let mockSurveyService: Pick<SurveyService, 'sendSurvey'> = {
  sendSurvey : (email: string, genreId: string) =>  of({surveyId: ''})
};

let mockGenreService: Pick<GenreService , 'fetchMusicalGenre'> = {
  fetchMusicalGenre:  () => of([])
};

let mockMatSnackBar: Pick<MatSnackBar, 'open'> = {
  open: (message: string, action?: string, config?: any) => ({} as MatSnackBarRef<TextOnlySnackBar>)
};

describe('SurveyFormWrapperComponent', () => {
  let component: SurveyFormWrapperComponent;
  let fixture: ComponentFixture<SurveyFormWrapperComponent>;

  beforeEach(async () => {
   
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ SurveyFormWrapperComponent, MockResultComponent ],
      providers: [
        {provide:SurveyService , useValue: mockSurveyService },
        {provide:GenreService , useValue: mockGenreService },
        {provide:MatSnackBar , useValue: mockMatSnackBar },
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
    
    const spy = spyOn(mockGenreService, 'fetchMusicalGenre')
    spy.and.returnValue(of([]))
    component.ngOnInit()
    expect(mockGenreService.fetchMusicalGenre).toHaveBeenCalled();

    expect(component).toBeTruthy();

  });
  
  
  it('should open snackbar with message `Ocurrió un problema, intente más tarde`',  () => {
    
    const spyFetchMusicalGenre = spyOn(mockGenreService, 'fetchMusicalGenre')
    spyFetchMusicalGenre.and.returnValue( throwError( () => new HttpErrorResponse({ status: 500}) ) )
    spyOn(component , 'showSnackBar')

    
    component.ngOnInit()

    expect(mockGenreService.fetchMusicalGenre).toHaveBeenCalled();
    expect(component.musicalGenres).toEqual([]);

    expect(component.showSnackBar).toHaveBeenCalledWith(`Ocurrió un problema, intente más tarde` , 'error')
  }); 
  
  it('should open snackbar with message `Su respuesta se ingresó correctamente`', async () => {
    
    const spySendSurvey = spyOn(mockSurveyService, 'sendSurvey')
    spySendSurvey.and.returnValue(of({surveyId: '1233445'}))
    
    spyOn(component , 'showSnackBar')
    await component.handleSubmitResult({ data: {email: 'test@mail.com' ,genreId: '1'} })
    
    expect(mockSurveyService.sendSurvey).toHaveBeenCalledWith('test@mail.com', '1');
    expect(component.showSnackBar).toHaveBeenCalledOnceWith('Su respuesta se ingresó correctamente', 'success');
  });


  it('should open snackbar with message `No se pudo ingresar su respuesta, intente más tarde`', async () => {
    
    const spySendSurvey = spyOn(mockSurveyService, 'sendSurvey')
    spySendSurvey.and.returnValue(throwError( () => new HttpErrorResponse({ status: 500}) ))
    
    spyOn(component , 'showSnackBar')
    await component.handleSubmitResult({ data: {email: 'test@mail.com' ,genreId: '1'} })
    
    expect(component.showSnackBar).toHaveBeenCalledOnceWith('No se pudo ingresar su respuesta, intente más tarde', 'error');
  });

  it('should open snackbar with message `Email ya existe`', async () => {
    
    const spySendSurvey = spyOn(mockSurveyService, 'sendSurvey')
    spySendSurvey.and.returnValue(throwError( () => new HttpErrorResponse({ status: 400 , error: { message: 'Email ya existe !!!'}}) ))
    
    spyOn(component , 'showSnackBar')
    await component.handleSubmitResult({ data: {email: 'test@mail.com' ,genreId: '1'} })
    
    expect(component.showSnackBar).toHaveBeenCalledOnceWith('Email ya existe !!!', 'error');
  });
});
