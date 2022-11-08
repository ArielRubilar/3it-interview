import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { ResultsComponent } from './pages/results/results.component';
import { SurveyRoutingModule } from './survey-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { SharedModule } from '../shared/shared.module';
import { TableResultsComponent } from './components/table-results/table-results.component';
import { GenreAdapterService } from './services/music/genre-adapter.service';
import { SurveyFormWrapperComponent } from './components/survey-form-wrapper/survey-form-wrapper.component';


@NgModule({
  declarations: [
    HomeComponent,
    SurveyComponent,
    ResultsComponent,
    SurveyFormComponent,
    TableResultsComponent,
    SurveyFormWrapperComponent,
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    GenreAdapterService
  ]
})
export class SurveyModule { }
