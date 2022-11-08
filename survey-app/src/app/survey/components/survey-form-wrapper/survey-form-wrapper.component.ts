import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GenreService } from '../../services/music/genre.service';
import { IMusicalGenre } from '../../services/music/models/musical-genre.interface';
import { lastValueFrom } from 'rxjs';
import { SurveyService } from '../../services/survey/survey.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-survey-form-wrapper',
  templateUrl: './survey-form-wrapper.component.html',
  styleUrls: ['./survey-form-wrapper.component.scss']
})
export class SurveyFormWrapperComponent implements OnInit {

  musicalGenres: IMusicalGenre[] = []

  constructor(
    private musicalGenreService: GenreService,
    private snackBar: MatSnackBar,
    private router: Router,
    private surveyService: SurveyService
  ) { }

  ngOnInit(): void {
    this.musicalGenreService.fetchMusicalGenre().subscribe( {
      next : (genres) => {this.musicalGenres = genres},
      error: () => {this.showSnackBar('Ocurrió un problema, intente más tarde', 'error')}
    })
  }

  showSnackBar(text: string , type: 'error' | 'success' ){
    this.snackBar.open( text  , '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: `snackbar-type-fill-${type}`,
      duration: 4000
    });
  }

  async handleSubmitResult(status: {  data: {email: string , genreId: string} }){
      const { data } = status;
      try{
        await lastValueFrom( this.surveyService.sendSurvey( data.email , data.genreId ) )
        this.router.navigate(['/results']); 
        this.showSnackBar('Su respuesta se ingresó correctamente', 'success')
      }catch(e) {
        let message = 'No se pudo ingresar su respuesta, intente más tarde'
        if( e instanceof HttpErrorResponse && e.status === 400){
          message = e.error.message
        }
        this.showSnackBar(message, 'error')
      }
    
  }

}
