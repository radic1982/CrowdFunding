export interface ProjectI {
    id?: number
    name: string
    userName: string
    description: string
    wantedPrice: number
    paidPrice:number
}

export class Project implements ProjectI {
     id?: number
     name: string
     userName: string
     description: string
     wantedPrice: number
     paidPrice: number

    constructor(i: ProjectI) {
        this.id = i.id
        this.name = i.name
        this.userName = i.userName
        this.description = i.description
        this.wantedPrice = i.wantedPrice
        this.paidPrice = 0;
    }
}