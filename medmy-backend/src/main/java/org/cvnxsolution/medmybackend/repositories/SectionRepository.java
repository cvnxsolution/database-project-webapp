package org.cvnxsolution.medmybackend.repositories;

import org.cvnxsolution.medmybackend.models.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectionRepository extends JpaRepository<Section, Long> {
}
