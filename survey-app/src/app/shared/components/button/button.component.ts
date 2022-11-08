import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent  {

  @Output()
  clicked: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  handleClick() {
    this.clicked.emit();
  }

}
