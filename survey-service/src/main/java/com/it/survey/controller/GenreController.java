package com.it.survey.controller;

import com.it.survey.constant.GenresErrors;
import com.it.survey.exception.ApiRequestException;
import com.it.survey.model.Genre;
import com.it.survey.service.GenreService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@CrossOrigin()
@RestController()
@RequestMapping("/genres")
public class GenreController {

    private Logger logger = LoggerFactory.getLogger(GenreController.class);
    private final GenreService genreService;

    public GenreController(GenreService genreService) {
        this.genreService = genreService;
    }

    @GetMapping("")
    public List<Genre> getGenres() {
        logger.info("[INIT] [GenreController] getGenres ");
        try{
            logger.info("[END] [GenreController] getGenres ");
            return this.genreService.getGenres();
        }catch (Exception e) {
            logger.error(e.getMessage() , e.getCause());
            throw  new ApiRequestException(
                GenresErrors.GET_GENRES_MESSAGE,
                GenresErrors.GET_GENRES_CODE,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }

    }
}
