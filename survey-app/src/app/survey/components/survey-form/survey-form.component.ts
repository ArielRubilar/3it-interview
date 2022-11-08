import { Component, Input, Output , EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


import { IMusicalGenre } from '../../services/music/models/musical-genre.interface';


@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent  {

  @Input()
  musicalGenres: IMusicalGenre[] = []

  @Output()
  submitResult: EventEmitter<{ data: {email: string , genreId: string} }> = new EventEmitter()

  formGroup: FormGroup;

  constructor(
  
  ) { 
    this.formGroup = new FormGroup({
      musicalGenre: new FormControl('' , [ Validators.required]),
      email: new FormControl('', [ Validators.required , Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])
    })
  }


  async handleSubmit() {

    if(this.formGroup.invalid) {
      Object.keys( this.formGroup.controls).forEach( key => {
        this.formGroup.controls[key].markAsDirty()
      })
      return
    }

    const email = this.formGroup.value.email;
    const genreId = this.formGroup.value.musicalGenre

    const status = { data: {email , genreId}}

    this.submitResult.emit(status)
  }

}
