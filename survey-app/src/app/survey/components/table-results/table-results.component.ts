import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey/survey.service';

@Component({
  selector: 'app-table-results',
  templateUrl: './table-results.component.html',
  styleUrls: ['./table-results.component.scss']
})
export class TableResultsComponent implements OnInit {

  headers = ['Genero Musical', 'Total']

  displayedColumns: string[] = ['genre', 'total'];
  
  dataSource: {genre: string , total: number}[] = [];

  constructor(
    private surveyService: SurveyService
  ) { }

  ngOnInit(): void {
    this.surveyService.getSurveyTotals().subscribe( totals =>{
        this.dataSource = totals.map( t => ({genre: t.genre.name , total: t.total} ) )
    })
  }

}
