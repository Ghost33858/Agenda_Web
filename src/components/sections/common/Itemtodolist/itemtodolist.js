import { getTodosFromStorage, saveTodosToStorage } from '../LocalStorage/storage.js';

function ItemTodoList(todo, onUpdate, onDelete) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Eliminar";

    li.appendChild(span);
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        if (confirm("¿Eliminar esta tarea?")) {
            const todos = getTodosFromStorage().filter(t => t.id !== todo.id);
            saveTodosToStorage(todos);
            li.remove();
            if (onDelete) onDelete(todo);
        }
    });

    return li;
}

export { ItemTodoList };
