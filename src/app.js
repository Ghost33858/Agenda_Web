import { Button } from "./components/sections/common/button.js";
import { Contactos } from "./components/sections/Contacto/Contactos.js";
import { NewContactForm } from "./components/sections/NewContactForm/NewContactForm.js";
import { TodoApp } from "./components/ToDoList/todo.js";

const nav = document.getElementById("nav");
const container = document.getElementById("container");

function render(view) {
  container.innerHTML = "";
  container.appendChild(view); // view debe ser un nodo
}

// Botones
nav.appendChild(Button(
  "Agenda",
  "agenda",
  "person.svg",
  () => render(Contactos())
));

nav.appendChild(Button(
  "Crear contacto",
  "plus",
  "nuevo.svg",
  () => render(NewContactForm(() => render(Contactos())))
));

nav.appendChild(Button(
  "ToDoList",
  "todoList",
  "agenda.svg",
  () => render(TodoApp()) // PASAMOS NODO DEVUELTO POR TodoApp
));

nav.appendChild(Button(
  "Crear tarea",
  "plus",
  "nuevo.svg",
  () => {
    container.innerHTML = "<h2>Nueva tarea (pendiente)</h2>";
  }
));

// Render inicial
render(Contactos());
