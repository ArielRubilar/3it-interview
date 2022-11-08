package com.it.survey.repository;

import com.it.survey.entity.GenreEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface GenreRepository  extends JpaRepository<GenreEntity, String> {
}
