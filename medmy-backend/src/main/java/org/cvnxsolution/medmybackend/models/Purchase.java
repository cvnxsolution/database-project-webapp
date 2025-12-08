package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.cvnxsolution.medmybackend.utils.PaymentMethod;
import org.cvnxsolution.medmybackend.utils.PaymentStatus;

import java.time.LocalDateTime;

@Entity
@Table(name = "purchases")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private LocalDateTime purchasedDate;
    private Double paidAmount;
    private PaymentStatus paymentStatus;
    private PaymentMethod paymentMethod;
    private String transactionId;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
}
