package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.EnableMBeanExport;

import java.time.LocalDateTime;

@Entity
@Table(name = "certificates")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Certificate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String fileUrl;
    private LocalDateTime issueDate;


    private Boolean hasExpireDate;

    @Column(nullable = true)
    private LocalDateTime expiresAt;
    private Boolean isExpired;


    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @OneToOne
    @JoinColumn(name = "course_id")
    private Course course;



}
