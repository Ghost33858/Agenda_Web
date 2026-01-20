import { getTodosFromStorage, saveTodosToStorage } from '../LocalStorage/storage.js';

function NewTodoForm({ onAdd }) {
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.placeholder = "Nueva tarea...";
    const button = document.createElement('button');
    button.textContent = "Agregar";

    form.appendChild(input);
    form.appendChild(button);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (!taskText) return;

        const todos = getTodosFromStorage();
        const newTodo = {
            id: Date.now(),
            text: taskText
        };
        todos.push(newTodo);
        saveTodosToStorage(todos);

        onAdd(newTodo);
        input.value = '';
    });

    return form;
}

export { NewTodoForm };
