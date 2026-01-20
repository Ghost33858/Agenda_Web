import { Button } from "./components/sections/common/button.js";
import { Contactos } from "./components/sections/Contacto/Contactos.js";
import { NewContactForm } from "./components/sections/NewContactForm/NewContactForm.js";

const nav = document.getElementById("nav");
const container = document.getElementById("container");

function render(view) {
  container.innerHTML = "";
  container.appendChild(view);
}

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
  () => {
    container.innerHTML = "<h2>ToDoList (pendiente)</h2>";
  }
));

nav.appendChild(Button(
  "Crear tarea",
  "plus",
  "nuevo.svg",
  () => {
    container.innerHTML = "<h2>Nueva tarea (pendiente)</h2>";
  }
));

render(Contactos());

async function tareas() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("Tareas:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

tareas();

console.log("Completado");
