import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<TData>  {

  @Input()
  headers: string[] = []

  @Input()
  displayedColumns: string[] = [];
  
  @Input()
  dataSource: TData[] = [];

  constructor() { }

}
