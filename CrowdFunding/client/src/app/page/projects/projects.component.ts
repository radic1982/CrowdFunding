import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project-service';
import { Project } from '../../model/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private service: ProjectService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getProjects().subscribe(
      (data: Project[]) => {
        this.projects = data;
      }
    )
  }

  details(project: Project) {
    this.router.navigate(['/projects' + '/' + project.id])
  }

}