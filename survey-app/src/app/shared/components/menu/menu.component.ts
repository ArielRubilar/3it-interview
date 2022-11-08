import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

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
