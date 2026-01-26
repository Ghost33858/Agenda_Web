import { getTodosFromStorage, saveTodosToStorage } from '../LocalStorage/storage.js';

function NewTodoForm({ onAdd }) {
    const section = document.createElement('section');
    section.innerHTML = `<h2>Nueva Tarea</h2>`;

    const form = document.createElement('form');
    const input = document.createElement('input');
    input.placeholder = "Escribe la tarea aquí...";
    
    const button = document.createElement('button');
    button.textContent = "Guardar Tarea";

    form.appendChild(input);
    form.appendChild(button);
    section.appendChild(form);

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

        if (onAdd) onAdd(); 
    });

    return section;
}

export { NewTodoForm };
