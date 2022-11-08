package com.it.survey.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SurveyResult {

    public  SurveyResult(  String genreId ,String name , Long total) {
        this.total = total;
        this.genre = new Genre(genreId , name);
    }
    Genre genre;

    Long total;
}
