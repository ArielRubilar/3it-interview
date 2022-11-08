package com.it.survey.constant;

import lombok.experimental.UtilityClass;

@UtilityClass
public class SurveyErrors {

    public static final String SAVE_SURVEY_MESSAGE = "Ocurrio un error al guardar la respuesta";
    public static final String SAVE_SURVEY_CODE = "SVY-001";
    public static final String SAVE_SURVEY_NO_GENRE_MESSAGE = "Genero musical incorrecto";
    public static final String SAVE_SURVEY_NO_GENRE_CODE = "SVY-002";
    public static final String SAVE_SURVEY_EMAIL_DUPLICATED_MESSAGE = "Email ya registrado";
    public static final String SAVE_SURVEY_EMAIL_DUPLICATED_CODE = "SVY-003";
    public static final String GET_SURVEYS_MESSAGE = "Ocurrio un error al obtener los resultados";
    public static final String GET_SURVEYS_CODE = "SVY-004";
}
