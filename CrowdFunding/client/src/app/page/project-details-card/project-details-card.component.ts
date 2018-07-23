import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project-service';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectI } from '../../model/project.model';

@Component({
  selector: 'app-project-details-card',
  templateUrl: './project-details-card.component.html',
  styleUrls: ['./project-details-card.component.scss']
})
export class ProjectDetailsCardComponent implements OnInit {

  project: Project;
  param: number;
  activeProject: Project;

  constructor(private route: ActivatedRoute, private service: ProjectService) { }

  ngOnInit() {
    this.getParam();
    this.loadData();
   // this.setActiveProject(this.project);
  }

  getParam() {
    this.param = this.route.snapshot.params.id;
  }

  loadData() {
    this.service.getProject(this.param)
      .subscribe(
        (res: Project) => {
          this.project = res;
          this.setActiveProject(this.project);
        }
      )
  }
  
  setActiveProject(project:Project){
    this.activeProject=new Project(project);
  }

  // resetActiveProject(){
  //   this.activeProject= new Project({
  //     name:'',
  //     userName:'',
  //     description:'',
  //   })
  // }

  donate() {
    this.service.putProject(this.activeProject)
    .subscribe(
      ()=>{
        this.loadData();
      }
    )
  }

}
