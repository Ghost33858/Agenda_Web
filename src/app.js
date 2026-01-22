import { Button } from "./components/sections/common/button.js";
import { Contactos } from "./components/sections/Contacto/Contactos.js";
import { NewContactForm } from "./components/sections/NewContactForm/NewContactForm.js";
import { TodoApp } from "./components/ToDoList/todo.js";
// 1. Importamos el formulario de tareas
import { NewTodoForm } from "./components/sections/common/newtodoform/newtodoform.js"; 

const nav = document.getElementById("nav");
const container = document.getElementById("container");

function render(view) {
  container.innerHTML = "";
  container.appendChild(view); // view debe ser un nodo
}

// --- Botones de Contactos ---

nav.appendChild(Button(
  "Agenda",
  "agenda",
  "user.svg",
  () => render(Contactos())
));

nav.appendChild(Button(
  "Crear contacto",
  "plus",
  "nuevo.svg",
  // Al guardar, nos manda a la lista de contactos
  () => render(NewContactForm(() => render(Contactos())))
));

// --- Botones de Tareas ---

nav.appendChild(Button(
  "ToDoList",
  "todoList",
  "agenda.svg",
  () => render(TodoApp()) 
));

nav.appendChild(Button(
  "Crear tarea",
  "plus",
  "nuevo.svg",
  () => {
    // 2. Usamos el componente NewTodoForm
    // Le pasamos la función onAdd para que, al terminar, renderice la lista de tareas
    render(NewTodoForm({ 
      onAdd: () => render(TodoApp()) 
    }));
  }
));

// Render inicial
render(Contactos());