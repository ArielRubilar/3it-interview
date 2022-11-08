import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';

import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  template: '<ng-content></ng-content>'
})
class MockLayoutComponent {}

@Component({
  selector: 'app-table-results',
  template: '<p>TABLE</p>'
})
class MockTableResultComponent {}

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent , MockLayoutComponent , MockTableResultComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
