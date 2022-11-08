package com.it.survey.service;

import com.it.survey.entity.GenreEntity;
import com.it.survey.entity.SurveyEntity;
import com.it.survey.model.SurveyResult;
import com.it.survey.repository.GenreRepository;
import com.it.survey.repository.SurveyRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service()
@Slf4j()
public class SurveysServiceImpl implements  SurveysService {

    private final Logger logger = LoggerFactory.getLogger(SurveysServiceImpl.class);

    private final SurveyRepository surveyRepository;

    private final GenreRepository genreRepository;

    public SurveysServiceImpl (SurveyRepository surveyRepository , GenreRepository genreRepository) {
        this.surveyRepository = surveyRepository;
        this.genreRepository = genreRepository;
    }

    @Override
    public List<SurveyResult> getSurveyResult() {
        logger.info("[INIT] [SurveysServiceImpl] getSurveyResult ");
        List<SurveyResult> result = this.surveyRepository.getSurveyResult();
        logger.info("[END] [SurveysServiceImpl] getSurveyResult ");
        return result;
    }

    @Override
    public String saveSurvey(String email, String genreId) {
        logger.info("[INIT] [SurveysServiceImpl] saveSurvey ");
        GenreEntity genre = this.genreRepository.getReferenceById(genreId);
        genre.getName();
        SurveyEntity surveyEntity = new SurveyEntity();
        surveyEntity.setEmail(email);
        surveyEntity.setGenre(genre);
        SurveyEntity newSurvey = this.surveyRepository.save(surveyEntity);
        logger.info("[END] [SurveysServiceImpl] saveSurvey ");
        return newSurvey.getId();
    }
}
