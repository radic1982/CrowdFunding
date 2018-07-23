package vp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
	
}
