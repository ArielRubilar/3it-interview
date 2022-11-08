package com.it.survey.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
public class ApiRequestException extends  RuntimeException{

    private final String code ;
    private final HttpStatus httpStatus;
    public ApiRequestException(String message , String code , HttpStatus httpStatus) {
        super(message);
        this.code = code;
        this.httpStatus = httpStatus;
    }

    public ApiRequestException(String message , String code , Throwable cause , HttpStatus httpStatus) {
        super(message,cause);
        this.code = code;
        this.httpStatus = httpStatus;
    }
}
