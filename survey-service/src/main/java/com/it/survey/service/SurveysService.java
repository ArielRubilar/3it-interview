package com.it.survey.service;

import com.it.survey.model.SurveyResult;

import java.util.List;

public interface SurveysService {

    List<SurveyResult> getSurveyResult();

    String saveSurvey( String email,String genreId );

}
