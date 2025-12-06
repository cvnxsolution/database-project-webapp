package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.cvnxsolution.medmybackend.utils.AssignmentStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "assignments")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fileUrl;

    private String title;

    private String description;

    private LocalDateTime issueDate;

    private LocalDateTime expireDate;

    private AssignmentStatus status;


}
