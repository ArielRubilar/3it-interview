import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TableComponent } from 'src/app/shared/components/table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SurveyService } from '../../services/survey/survey.service';

import { TableResultsComponent } from './table-results.component';

let surveyServiceMock: jasmine.SpyObj<SurveyService>;


describe('TableResultsComponent', () => {
  let component: TableResultsComponent;
  let fixture: ComponentFixture<TableResultsComponent>;
  
  beforeEach(async () => {

    surveyServiceMock = jasmine.createSpyObj('SurveyService', ['getSurveyTotals']);

    const response = [{total: 10 , genre: {id: '1' , name: 'Rock'}} ,{total: 12 , genre: {id: '3' , name: 'POP'}} ]

    surveyServiceMock.getSurveyTotals.and.returnValue(of(response))

    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ TableResultsComponent , TableComponent ],
      providers: [ { provide: SurveyService , useValue: surveyServiceMock}]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call survey total api', () => {
    expect(component.dataSource).toEqual([{genre: 'Rock' , total: 10}, {genre: 'POP' , total: 12} ])
  })

});
