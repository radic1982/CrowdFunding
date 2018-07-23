import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Project } from "../model/project.model";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class ProjectService {

    private readonly path = '/api/projects';

    constructor(private http: HttpClient) { }

    getProjects() {
        // Ovo vraca observablu u ng6
        return this.http.get<Project[]>(this.path);
    }

    getProject(id: number) {
        return this.http.get<Project>(this.path + '/' + id);
    }

    putProject(project):Observable<Project>{
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Project>(`/api/projects/${project.id}`, JSON.stringify(project), {headers});

    }

}