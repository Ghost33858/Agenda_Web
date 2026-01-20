import { NewTodoForm } from '../sections/common/newtodoform/newtodoform.js';
import { ItemTodoList } from '../sections/common/Itemtodolist/itemtodolist.js';
import { getTodosFromStorage } from '../sections/common/LocalStorage/storage.js';

function TodoApp() {
    const root = document.createElement('div'); // contenedor propio
    const ul = document.createElement('ul');

    const todos = getTodosFromStorage();
    todos.forEach(todo => {
        const item = ItemTodoList(todo);
        ul.appendChild(item);
    });

    const form = NewTodoForm({
        onAdd: (todo) => {
            const item = ItemTodoList(todo);
            ul.appendChild(item);
        }
    });

    root.appendChild(form);
    root.appendChild(ul);

    return root; // devuelve un nodo
}

export { TodoApp };
