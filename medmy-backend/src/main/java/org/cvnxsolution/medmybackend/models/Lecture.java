package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "lectures")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Lecture {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    private String title;

    @Column(nullable = false, unique = true)
    private String slug;

    private String description;

    private String videoUrl;

    private Integer durationSeconds;

    private String VideoFormat;

    private Double fileSizeMb;

    private Boolean isPreviewAvailable;

    @ManyToOne
    @JoinColumn(name = "section_id")
    private Section section;
}
