package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "achivements")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Badge {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String imageUrl;
}
