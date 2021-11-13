

export class Todo {

    static fromJson({ id, name, completed, created }) {
        const tempTodo = new Todo( name ) ;

        tempTodo.id = id;
        tempTodo.completed = completed;
        tempTodo.created = created

        return tempTodo
    }

    constructor( task ) {
        this.name = task,
        this.id = new Date().getTime(),
        this.date = new Date(), 
        this.completed = false
        
    }
}



