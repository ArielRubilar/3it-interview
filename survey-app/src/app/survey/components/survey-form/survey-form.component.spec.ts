import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from 'src/app/shared/components/field/field.component';

import { SurveyFormComponent } from './survey-form.component';

describe('SurveyFormComponent', () => {
  let component: SurveyFormComponent;
  let fixture: ComponentFixture<SurveyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ SurveyFormComponent  , FieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return value Form', () => {
    
    const emailControl = component.formGroup.get('email');
    emailControl?.setValue('TEST@MAIL.COM');

    const musicalGenreControl = component.formGroup.get('musicalGenre');
    musicalGenreControl?.setValue('1');

    component.onSubmitResult.subscribe( values => {
      expect(values.data).toEqual({email:'TEST@MAIL.COM', genreId: '1'})
    })
    
    component.handleSubmit()
    fixture.detectChanges();
  });

  it('should don`t emit value if invalid form', () => {
    
    spyOn(component.onSubmitResult, 'emit');

    component.handleSubmit();
    
    expect(component.onSubmitResult.emit).not.toHaveBeenCalled();
  });
});
