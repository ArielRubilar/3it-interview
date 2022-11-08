package com.it.survey.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice()
public class ApiExceptionHandler {

    @ExceptionHandler(value = {ApiRequestException.class})
    public ResponseEntity<ApiException> handleApiRequestException( ApiRequestException e) {

        ApiException apiException = new ApiException(
                e.getCode(),
                e.getMessage()
        );

        return new ResponseEntity(apiException , e.getHttpStatus());
    }
}
