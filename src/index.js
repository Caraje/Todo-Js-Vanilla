import './styles.css';
import './css/normalize.css';
import { Todolist } from './classes/TodoList-class';
import { createHtml } from './js/componentes';

export const todoList = new Todolist()


todoList.todos.map( createHtml )

