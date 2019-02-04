export class Todo {
    id : number
    name : string
    isDone : boolean
    ownerId: number
    constructor(title){
      this.name = title;
    }
}
