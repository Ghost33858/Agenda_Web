import { getTodosFromStorage, saveTodosToStorage } from '../LocalStorage/storage.js';

function ItemTodoList(todo, onUpdate) {
    const li = document.createElement('li');
    li.className = 'todo-item'; // Clase para el CSS

    // --- 1. CHECKBOX ---
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed || false; // Estado inicial
    
    // Al marcar/desmarcar, guardamos el estado
    checkbox.addEventListener('change', () => {
        const todos = getTodosFromStorage();
        const index = todos.findIndex(t => t.id === todo.id);
        if (index !== -1) {
            todos[index].completed = checkbox.checked;
            saveTodosToStorage(todos);
            span.style.textDecoration = checkbox.checked ? "line-through" : "none";
            span.style.opacity = checkbox.checked ? "0.5" : "1";
        }
    });

    // --- 2. TEXTO DE LA TAREA ---
    const span = document.createElement('span');
    span.textContent = todo.text;
    // Aplicar estilo si ya estaba completada
    if (todo.completed) {
        span.style.textDecoration = "line-through";
        span.style.opacity = "0.5";
    }

    // --- 3. BOTÓN EDITAR ---
    const editBtn = document.createElement('button');
    editBtn.textContent = "Editar";
    editBtn.className = "btn-edit";
    
    editBtn.addEventListener('click', () => {
        const nuevoTexto = prompt("Edita tu tarea:", span.textContent);
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            const todos = getTodosFromStorage();
            const index = todos.findIndex(t => t.id === todo.id);
            if (index !== -1) {
                todos[index].text = nuevoTexto.trim();
                saveTodosToStorage(todos);
                span.textContent = nuevoTexto.trim(); // Actualiza la UI sin recargar
            }
        }
    });

    // --- 4. BOTÓN ELIMINAR ---
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', () => {
        if (confirm("¿Eliminar esta tarea?")) {
            const todos = getTodosFromStorage().filter(t => t.id !== todo.id);
            saveTodosToStorage(todos);
            li.remove();
        }
    });

    // --- Estructura Final ---
    const leftContainer = document.createElement('div');
    leftContainer.className = "todo-left";
    leftContainer.appendChild(checkbox);
    leftContainer.appendChild(span);

    const rightContainer = document.createElement('div');
    rightContainer.className = "todo-right";
    rightContainer.appendChild(editBtn);
    rightContainer.appendChild(deleteBtn);

    li.appendChild(leftContainer);
    li.appendChild(rightContainer);

    return li;
}

export { ItemTodoList };
