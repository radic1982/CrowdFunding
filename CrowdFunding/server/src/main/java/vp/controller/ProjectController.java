package vp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vp.model.Project;
import vp.service.ProjectService;

@RestController
@RequestMapping(value = "/api/projects")
public class ProjectController {
	
	@Autowired
	ProjectService service;
	
	@GetMapping()
	public ResponseEntity<List<Project>> getProjects() {
		List<Project> retVal = service.findAll();	
		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Project> getProject(@PathVariable Long id) {
		Project retVal = service.findOne(id);
		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}
	
	@PostMapping()
	public ResponseEntity<Project> addProject(@RequestBody Project p) {
		Project project = new Project();
		project.setName(p.getName());
		project.setDescription(p.getDescription());
		project.setWantedPrice(p.getWantedPrice());
		
		return new ResponseEntity<>(project, HttpStatus.CREATED);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Project>change(@PathVariable Long id, @RequestBody Project p){
		Project project = new Project();
		project = service.findOne(id);
		project.setId(id);
		//project.setUsername(p.getUsername());
		//project.setDescription(p.getDescription());
		//project.setName(p.getName());
		//project.setWantedPrice(p.getWantedPrice());
		
		double price=project.getPaidPrice();
		project.setPaidPrice(price+p.getPaidPrice());
		project = service.save(project);
		
		return new ResponseEntity<>(project, HttpStatus.OK);
	}
}