import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyComponent } from './survey.component';

import { Component } from '@angular/core';


@Component({
  selector: 'app-page-layout',
  template: '<ng-content></ng-content>'
})
class MockLayoutComponent{}

@Component({
  selector: 'app-survey-form-wrapper',
  template: '<p>Survey</p>'
})
class MockSurveyFormComponent{}

describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyComponent, MockLayoutComponent , MockSurveyFormComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
