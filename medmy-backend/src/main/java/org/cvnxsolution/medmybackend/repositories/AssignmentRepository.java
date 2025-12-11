package org.cvnxsolution.medmybackend.repositories;

import org.cvnxsolution.medmybackend.models.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}
