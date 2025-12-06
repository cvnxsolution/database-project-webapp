package org.cvnxsolution.medmybackend.repositories;

import org.cvnxsolution.medmybackend.models.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
