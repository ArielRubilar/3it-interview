package com.it.survey.repository;

import com.it.survey.entity.SurveyEntity;
import com.it.survey.model.SurveyResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SurveyRepository extends JpaRepository<SurveyEntity, String> {

    @Query(" Select new com.it.survey.model.SurveyResult( survey.genre.id  , survey.genre.name  , count(survey.genre.id) )" +
            "from  SurveyEntity as survey group by survey.genre.id"
    )
    List<SurveyResult> getSurveyResult();

}
