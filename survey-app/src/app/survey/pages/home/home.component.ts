import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  links: { text: string , path: string }[] = [
    {text: 'Encuesta', path: '/survey'},
    {text: 'Resultado', path: '/results'},
    {text: 'Acerca de', path: '/about-us'}
  ]

  constructor(
    private router: Router
  ) { }


  handleClick(path: string){
    this.router.navigate([path])
  }
}
