package vp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.model.user.SecurityUser;

@Repository
public interface UserRepository extends JpaRepository<SecurityUser, Long> {
	
	Optional<SecurityUser> findByUsername(String username);

}