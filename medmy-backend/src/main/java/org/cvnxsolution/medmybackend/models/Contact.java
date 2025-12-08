package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.cvnxsolution.medmybackend.utils.PhoneType;

@Entity
@Table(name = "contacts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private PhoneType phoneType;
    private String phoneNumber;
    private Boolean isPrimary;

    @ManyToOne
    @JoinColumn(name = "trainer_id")
    private Trainer trainer;
}
