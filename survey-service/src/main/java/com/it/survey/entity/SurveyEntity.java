package com.it.survey.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="surveys")
public class SurveyEntity {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    @Column(unique=true)
    private String email;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="genre_id", nullable=false)
    private GenreEntity genre;
}
