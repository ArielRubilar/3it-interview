import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';
import { SurveyComponent } from './pages/survey/survey.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'survey' , component: SurveyComponent},
  { path: 'results' , component: ResultsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SharedModule]
})
export class SurveyRoutingModule { }
