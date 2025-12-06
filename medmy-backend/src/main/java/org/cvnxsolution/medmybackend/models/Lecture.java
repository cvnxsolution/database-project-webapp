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
    private String videoUrl;
}
