import { Project } from "./Project.model";

interface UserI {
    id?: number
    username: string
    password: string
    email: string
    role: string
    paidProjects: Project[]
    myProjects: Project[]
}

export class User implements UserI {
    public id: number
    public username: string
    public password: string
    public email: string
    public role: string
    public paidProjects: Project[]
    public myProjects: Project[]

    constructor(u: UserI) {
        this.id = u.id
        this.username = u.username
        this.password = u.password
        this.email = u.email
        this.role = u.role
        this.paidProjects = u.paidProjects
        this.myProjects = u.myProjects
    }
}