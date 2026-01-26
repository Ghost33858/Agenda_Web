import { getTodosFromStorage, saveTodosToStorage } from '../LocalStorage/storage.js';


function NewTodoForm({ onAdd }) {

    const section = document.createElement('section');
    section.innerHTML = `<h2>Nueva Tarea</h2>`;

    const form = document.createElement('form');

    const input = document.createElement('input');
    input.placeholder = "Título de la tarea";

    const textarea = document.createElement('textarea');
    textarea.placeholder = "Descripción de la tarea";

    const select = document.createElement('select');
    select.innerHTML = `
        <option value="">Severidad</option>
        <option value="1">Baja</option>
        <option value="2">Media</option>
        <option value="3">Alta</option>
    `;

    const button = document.createElement('button');
    button.textContent = "Guardar Tarea";

    form.append(input, textarea, select, button);
    section.appendChild(form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const text = input.value.trim();
        const description = textarea.value.trim();
        const severity = parseInt(select.value);

        if (!text || !severity) return;

        const todos = getTodosFromStorage();

        const newTodo = {
            id: Date.now(),
            text,
            description,
            severity
        };

        todos.push(newTodo);

        // Ordenar por severidad (Alta → Baja)
        todos.sort((a, b) => b.severity - a.severity);

        saveTodosToStorage(todos);

        if (onAdd) onAdd();
        form.reset();
    });

    return section;
}

export { NewTodoForm };