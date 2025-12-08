package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "socials")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Social {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String websiteName;
    private String profileLink;

    @ManyToOne
    @JoinColumn(name = "trainer_id")
    private Trainer trainer;
}
