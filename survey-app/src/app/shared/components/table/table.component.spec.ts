import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material/material.module';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent<{text:string , name: string}>;
  let fixture: ComponentFixture<TableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render columns correctly', () =>{
    
    component.headers = ['TEXT' , 'NAME']
    component.dataSource = [ {text: '1', name: 'name1'} ,{text: '2', name: 'name2'} , {text: '3', name: 'name3'}]
    component.displayedColumns = ['text', 'name']
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const headers = element.querySelectorAll('th')
    expect(headers[0].textContent).toContain('TEXT')
    expect(headers[1].textContent).toContain('NAME')
    expect(headers.length).toBe(2)

    const cells = element.querySelectorAll('td')

    expect(cells.length).toBe(6)

    expect(cells[1].textContent).toContain('1')
    expect(cells[5].textContent).toContain('name3')
  })
});
