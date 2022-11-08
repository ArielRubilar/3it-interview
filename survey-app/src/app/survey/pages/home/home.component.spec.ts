import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component} from '@angular/core';
import { HomeComponent } from './home.component';


@Component({
  selector: 'app-menu',
  template: '<p>MENU</p>'
})
class MockMenuComponent {}


@Component({
  selector: 'app-page-layout',
  template: '<ng-content></ng-content>'
})
class MockLayoutComponent {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent , MockMenuComponent , MockLayoutComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu component', () => {
    const menu = fixture.nativeElement.querySelector('p')
    expect(menu.textContent).toEqual('MENU')
  });
});
