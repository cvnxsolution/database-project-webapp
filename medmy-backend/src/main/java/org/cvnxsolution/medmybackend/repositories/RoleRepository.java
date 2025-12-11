package org.cvnxsolution.medmybackend.repositories;

import org.cvnxsolution.medmybackend.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}
