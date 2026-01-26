import { getTodosFromStorage, saveTodosToStorage } from '../LocalStorage/storage.js';

function ItemTodoList(todo) {
    const li = document.createElement('li');
    li.className = `todo-item severidad-${todo.severity || 1}`;

    /* ========= CHECKBOX ========= */
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed || false;

    checkbox.addEventListener('change', () => {
        const todos = getTodosFromStorage();
        const index = todos.findIndex(t => t.id === todo.id);

        if (index !== -1) {
            todos[index].completed = checkbox.checked;
            saveTodosToStorage(todos);
        }
    });

    /* ========= TEXTO ========= */
    const span = document.createElement('span');
    span.textContent = todo.text;

    /* ========= DESCRIPCIÓN ========= */
    const desc = document.createElement('small');
    desc.textContent = todo.description || "";
    desc.className = "todo-desc";

    /* ========= FECHA ========= */
    const date = document.createElement('small');
    date.className = "todo-date";
    date.textContent = todo.date ? `Fecha: ${todo.date}` : "";

    /* ========= SEVERIDAD ========= */
    const sev = document.createElement('span');
    sev.className = `todo-severity sev-${todo.severity || 1}`;
    sev.textContent = `Severidad: ${todo.severity || 1}`;

    /* ========= EDITAR ========= */
    const editBtn = document.createElement('button');
    editBtn.textContent = "Editar";
    editBtn.className = "btn-edit";

    editBtn.addEventListener('click', () => {
        const nuevoTexto = prompt("Editar tarea:", todo.text);
        if (!nuevoTexto) return;

        const nuevaDesc = prompt("Editar descripción:", todo.description || "");
        const nuevaFecha = prompt("Fecha (YYYY-MM-DD):", todo.date || "");
        const nuevaSev = prompt(
            "Severidad (1 = baja, 2 = media, 3 = alta):",
            todo.severity || 1
        );

        if (!nuevaSev || !nuevaFecha) return;

        const todos = getTodosFromStorage();
        const index = todos.findIndex(t => t.id === todo.id);

        if (index !== -1) {
            todos[index].text = nuevoTexto.trim();
            todos[index].description = nuevaDesc.trim();
            todos[index].date = nuevaFecha.trim();
            todos[index].severity = Number(nuevaSev);

            saveTodosToStorage(todos);

            /* Actualizar DOM */
            span.textContent = nuevoTexto;
            desc.textContent = nuevaDesc;
            date.textContent = `Fecha: ${nuevaFecha}`;
            sev.textContent = `Severidad: ${nuevaSev}`;
            li.className = `todo-item severidad-${nuevaSev}`;
        }
    });

    /* ========= ELIMINAR ========= */
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', () => {
        const todos = getTodosFromStorage().filter(t => t.id !== todo.id);
        saveTodosToStorage(todos);
        li.remove();
    });

    /* ========= CONTENEDORES ========= */
    const left = document.createElement('div');
    left.className = "todo-info";
    left.append(checkbox, span, desc, date, sev);

    const right = document.createElement('div');
    right.className = "todo-actions";
    right.append(editBtn, deleteBtn);

    li.append(left, right);

    return li;
}


export { ItemTodoList };
