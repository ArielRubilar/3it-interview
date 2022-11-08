import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageLayoutComponent } from './page-layout.component';
import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-menu',
  template: '<p>MENU</p>'
})
class MockMenuComponent {}

describe('PageLayoutComponent', () => {
  let component: PageLayoutComponent;
  let fixture: ComponentFixture<PageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatIconModule, MatSidenavModule, BrowserAnimationsModule ],
      declarations: [ PageLayoutComponent ,MockMenuComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
