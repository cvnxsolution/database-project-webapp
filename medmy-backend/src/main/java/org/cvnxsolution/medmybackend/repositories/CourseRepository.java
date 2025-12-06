package org.cvnxsolution.medmybackend.repositories;

import org.cvnxsolution.medmybackend.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
}
