export class Todo {
    id : number
    title : string
    status : string
    isDone : boolean

    constructor(id,title,status){
      this.id=id;
      this.title = title;
      this.status = status;
      this.isDone = false
    }
}
