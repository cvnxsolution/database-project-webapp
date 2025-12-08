package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "students")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String slug;

    private String profileImageUrl;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "student")
    private Set<Review> reviews;

    @OneToMany(mappedBy = "student")
    private Set<Answer> answers;

    @ManyToMany
    @JoinTable(
            name = "badges_students",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "badge_id")
    )
    private Set<Badge> badges;

    @OneToMany(mappedBy = "student")
    private Set<Purchase> purchases;

    @OneToMany(mappedBy = "student")
    private Set<Certificate> certificates;



}
