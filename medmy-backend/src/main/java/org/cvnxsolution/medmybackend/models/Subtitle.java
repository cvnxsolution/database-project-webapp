package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.cvnxsolution.medmybackend.utils.SubtitleStatus;

@Entity
@Table(name = "subtitles")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Subtitle {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String languageCode;
    private String fileFormat;
    private String storagePath;

    private SubtitleStatus status;

    @ManyToOne
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;
}
