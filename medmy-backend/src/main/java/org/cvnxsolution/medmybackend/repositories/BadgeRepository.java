package org.cvnxsolution.medmybackend.repositories;

import org.cvnxsolution.medmybackend.models.Badge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BadgeRepository extends JpaRepository<Badge, Long> {
}
