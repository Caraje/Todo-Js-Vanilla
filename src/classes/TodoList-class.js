import { Todo } from "./Todo-class"


export class Todolist {

    constructor() {
        this.loadLocalStorage()
    }


    newTodo( task ){
        this.todos.push( task )
        this.saveLocalStorage()
    }

    completeMarked ( id ) {

        for ( const todo of this.todos) {
            if ( todo.id == id ) {
                todo.completed = !todo.completed
                this.saveLocalStorage()               
                break
            }
        }
    }

    eliminateTodo( id ) {

        this.todos = this.todos.filter( (todo => todo.id != id) )
        this.saveLocalStorage()

    }

    eliminateTodosCompleted() {
        this.todos = this.todos.filter( ( todo => !todo.completed ) )
        this.saveLocalStorage()
    }



    saveLocalStorage(){
        localStorage.setItem('todo', JSON.stringify( this.todos ) )
    }

    loadLocalStorage(){
        this.todos = ( localStorage.getItem( 'todo' ) )  
                        ? JSON.parse( localStorage.getItem('todo') ) 
                        : []; 
        this.todos = this.todos.map( Todo.fromJson );

    }




}