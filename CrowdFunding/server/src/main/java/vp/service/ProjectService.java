package vp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vp.model.Project;
import vp.repository.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	ProjectRepository repository;
	
	public List<Project>findAll(){
		return repository.findAll();
	}
	
	public Project save(Project project) {
		return repository.save(project);
	}
	
	public Project findOne(Long id){
		return repository.findOne(id);
	}
	
}
