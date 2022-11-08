package com.it.survey.controller;

import com.it.survey.constant.SurveyErrors;
import com.it.survey.exception.ApiRequestException;
import com.it.survey.model.RequestSurvey;
import com.it.survey.model.SurveyResponse;
import com.it.survey.model.SurveyResult;
import com.it.survey.service.SurveysService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController()
@RequestMapping("/surveys")
public class SurveyController {
    private Logger logger = LoggerFactory.getLogger(SurveyController.class);

    private final SurveysService surveysService;

    public SurveyController(SurveysService surveysService) {
        this.surveysService = surveysService;
    }

    @GetMapping("/totals")
    public List<SurveyResult> getSurveysTotals() {
        logger.info("[INIT] [SurveyController] getSurveysTotals ");

        List<SurveyResult> results = new ArrayList<>();
        try{
            results = surveysService.getSurveyResult();
        }catch (Exception e) {
            logger.error(e.getMessage() , e.getCause());
            throw  new ApiRequestException(
                SurveyErrors.GET_SURVEYS_MESSAGE,
                SurveyErrors.GET_SURVEYS_CODE,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
        logger.info("[END] [SurveyController] getSurveysTotals ");
        return results;
    }

    @PostMapping("")
    public SurveyResponse saveSurvey(@RequestBody RequestSurvey requestSurvey) {
       SurveyResponse response = new SurveyResponse();
        logger.info("[INIT] [SurveyController] saveSurvey ");

        try {
            String surveyId = surveysService.saveSurvey(requestSurvey.getEmail(), requestSurvey.getGenreId());
            response.setSurveyId(surveyId);
        }catch (EntityNotFoundException e) {
            logger.error(e.getMessage() , e.getCause());
            throw  new ApiRequestException(
                SurveyErrors.SAVE_SURVEY_NO_GENRE_MESSAGE,
                SurveyErrors.SAVE_SURVEY_NO_GENRE_CODE,
                HttpStatus.BAD_REQUEST
            );
        }catch (DataIntegrityViolationException e) {
            logger.error(e.getMessage() , e.getCause());
            throw  new ApiRequestException(
                SurveyErrors.SAVE_SURVEY_EMAIL_DUPLICATED_MESSAGE,
                SurveyErrors.SAVE_SURVEY_EMAIL_DUPLICATED_CODE,
                HttpStatus.BAD_REQUEST
            );
        }catch (Exception e) {
            logger.error(e.getMessage() , e.getCause());
            throw  new ApiRequestException(
                SurveyErrors.SAVE_SURVEY_MESSAGE,
                SurveyErrors.SAVE_SURVEY_CODE,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
        logger.info("[END] [SurveyController] saveSurvey ");
        return response;
    }

}
