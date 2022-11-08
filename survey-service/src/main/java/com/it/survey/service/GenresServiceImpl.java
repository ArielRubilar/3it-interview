package com.it.survey.service;


import com.it.survey.model.Genre;
import com.it.survey.repository.GenreRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service()
@Slf4j()
public class GenresServiceImpl implements  GenreService {

    private Logger logger = LoggerFactory.getLogger(GenresServiceImpl.class);

    private GenreRepository genreRepository;

    public GenresServiceImpl (GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    @Override
    public List<Genre> getGenres() {
        logger.info("[INIT] [GenresServiceImpl] fetchGenres ");
        List<Genre> genres = new ArrayList<>();
        genreRepository.findAll().forEach( genreEntity ->  genres.add( new Genre( genreEntity.getId() , genreEntity.getName())));
        logger.info("[END] [GenresServiceImpl] fetchGenres ");
        return genres;
    }
}
