import { NewTodoForm } from '../sections/common/newtodoform/newtodoform.js';
import { ItemTodoList } from '../sections/common/Itemtodolist/itemtodolist.js';
import { getTodosFromStorage } from '../sections/common/LocalStorage/storage.js';

function TodoApp() {
    const section = document.createElement("section");
    section.className = "todo-app";

    const h2 = document.createElement("h2");
    h2.textContent = "Mi Lista de Pendientes";

    const ul = document.createElement("ul");
    const todos = getTodosFromStorage();

    // Solo cargamos los elementos que ya están guardados
    todos.forEach(todo => {
        ul.appendChild(ItemTodoList(todo, () => {
            // Refrescar si fuera necesario al borrar
        }));
    });

    section.appendChild(h2);
    section.appendChild(ul);

    return section;
}

export { TodoApp };
