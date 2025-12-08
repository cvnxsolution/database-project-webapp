package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Cleanup;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "trainers")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Trainer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @Column(unique = true, nullable = false)
    private String slug;
    private String bio;
    private String detailedProfile;
    private String profileImageUrl;
    private Long totalStudents;
    private Byte totalCourses;

    @OneToOne(cascade =  CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(mappedBy = "trainers")
    private Set<Course> courses;

    @OneToOne(mappedBy = "trainer", cascade = CascadeType.ALL)
    private Wallet wallet;

    @OneToMany(mappedBy = "trainer")
    private Set<Contact> contacts;

    @OneToMany(mappedBy = "trainer")
    private Set<Social> socials;


}
