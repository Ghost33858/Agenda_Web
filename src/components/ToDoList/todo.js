import { ItemTodoList } from '../sections/common/Itemtodolist/itemtodolist.js';
import { getTodosFromStorage } from '../sections/common/LocalStorage/storage.js';

function TodoApp() {
    const section = document.createElement("section");
    section.className = "todo-app";

    const h2 = document.createElement("h2");
    h2.textContent = "Mi Lista de Pendientes";

    const ul = document.createElement("ul");

    // 🔹 Obtener y ordenar por severidad (Alta → Media → Baja)
    const todos = getTodosFromStorage()
        .sort((a, b) => (b.severity || 1) - (a.severity || 1));

    todos.forEach(todo => {
        ul.appendChild(ItemTodoList(todo));
    });

    section.appendChild(h2);
    section.appendChild(ul);

    return section;
}

export { TodoApp };
