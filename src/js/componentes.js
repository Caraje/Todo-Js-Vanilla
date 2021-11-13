import { todoList } from "..";
import { Todo } from "../classes/Todo-class";
import { Todolist } from "../classes/TodoList-class";



const txtInput = document.querySelector('#task-input');
const divTaskList = document.querySelector('.app__todos__list');
const btnDelete = document.querySelector('#btn-delete-completes')
const filter = document.querySelector('.app__todos__buttons')
const filters = document.querySelectorAll('filter')




export const createHtml = ( task ) => {
    const taskHtml = `
        <div data-id="${task.id}" class="${ task.completed ? 'completed' : '' } app__todos__todo ">
                
            <div class="app__todos__todo__texts" >
                <input class="app__todos__todo__texts__check " type="checkbox" ${ task.completed ? 'checked' : '' } name="" id="">
                <div class="app__todos__todo__texts__text ${ task.completed ? 'completed' : '' }">${ task.name }</div>
            </div>
            <button class="app__todos__todo__delete">X</button>

        </div>
    `

    const div = document.createElement('div')
    div.innerHTML = taskHtml;

    divTaskList.append(div.firstElementChild)

    return divTaskList
}



txtInput.addEventListener('keyup', ( event ) => {


    if (event.keyCode === 13 && txtInput.value.length > 3 ) {
        const newTask = new Todo( txtInput.value);
        todoList.newTodo( newTask )
        createHtml(newTask)
        txtInput.value = ''

    }
})

divTaskList.addEventListener('click', ( event ) => {
    
    const elementName = event.target.localName;
    const elementTodo = event.target.parentElement.parentElement;
    const elementTask = event.target.parentElement;
    const elementId = elementTodo.getAttribute('data-id')
    const elementId2 = elementTask.getAttribute('data-id')



    if (elementName.includes('input') ) {
        todoList.completeMarked( elementId )
        elementTodo.classList.toggle('completed')


    } else if ( elementName.includes('button') ) {
        todoList.eliminateTodo( elementId2 )
        divTaskList.removeChild( elementTask )

    }

})

btnDelete.addEventListener('click', ( event ) => {

    todoList.eliminateTodosCompleted()

    for ( let i = divTaskList.children.length-1 ; i >= 0; i-- ) {

    const element = divTaskList.children[ i ]
    if ( element.classList.contains('completed') ) {
        divTaskList.removeChild( element )

    }
    }

})


filter.addEventListener('click', ( event ) => {  
    const filter = event.target.textContent;
    if ( !filter ) { return }

    filters.forEach(elem => elem.classList.remove('selected'))
    event.target.classList.add('selected')


    for ( const element of divTaskList.children ) {
        element.classList.remove( 'hidden' )
        const complet = element.classList.contains( 'completed' )

        switch( filter ) {
            case 'Pendientes' : 
                if( complet ) {
                    element.classList.add('hidden')
                }
            break;

            case 'Completados' : 
                if ( !complet ) {
                    element.classList.add( 'hidden' )
                }
            break
        }

    }
})  
