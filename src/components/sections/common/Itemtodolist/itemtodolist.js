import { getTodosFromStorage, saveTodosToStorage } from '../LocalStorage/storage.js';

function ItemTodoList(todo) {
    const li = document.createElement('li');
    li.className = `todo-item severidad-${todo.severity || 1}`;

    // CHECKBOX
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed || false;

    // TEXTO
    const span = document.createElement('span');
    span.textContent = todo.text;

    // DESCRIPCIÓN
    const desc = document.createElement('small');
    desc.textContent = todo.description || "";
    desc.className = "todo-desc";

    // SEVERIDAD
    const sev = document.createElement('span');
    sev.className = `todo-severity sev-${todo.severity || 1}`;
    sev.textContent = `Severidad: ${todo.severity || 1}`;

    // EDITAR
    const editBtn = document.createElement('button');
    editBtn.textContent = "Editar";
    editBtn.className = "btn-edit";

    editBtn.addEventListener('click', () => {
        const nuevoTexto = prompt("Editar tarea:", todo.text);
        const nuevaDesc = prompt("Editar descripción:", todo.description || "");
        const nuevaSev = prompt("Severidad (1 = baja, 2 = media, 3 = alta):", todo.severity || 1);

        if (!nuevoTexto || !nuevaSev) return;

        const todos = getTodosFromStorage();
        const index = todos.findIndex(t => t.id === todo.id);

        if (index !== -1) {
            todos[index].text = nuevoTexto.trim();
            todos[index].description = nuevaDesc.trim();
            todos[index].severity = Number(nuevaSev);

            saveTodosToStorage(todos);

            span.textContent = nuevoTexto;
            desc.textContent = nuevaDesc;
            sev.textContent = `Severidad: ${nuevaSev}`;
            li.className = `todo-item severidad-${nuevaSev}`;
        }
    });

    // ELIMINAR
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', () => {
        const todos = getTodosFromStorage().filter(t => t.id !== todo.id);
        saveTodosToStorage(todos);
        li.remove();
    });

    const left = document.createElement('div');
    left.append(checkbox, span, desc, sev);

    const right = document.createElement('div');
    right.append(editBtn, deleteBtn);

    li.append(left, right);

    return li;
}

export { ItemTodoList };
