import { Button } from "./components/sections/common/button.js";
import { Contactos } from "./components/sections/Contacto/Contactos.js";
import { NewContactForm } from "./components/sections/NewContactForm/NewContactForm.js";
let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button(
    "Agenda",
    "agenda",
    "person.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(Contactos());
    }
));
nav.appendChild(Button(
    "Crear contacto",
    "plus",
    "nuevo.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(Contactos());
    }
));
nav.appendChild(Button(
    "ToDoList", 
    "todoList", 
    "agenda.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(Contactos());
    }
));
nav.appendChild(Button(
    "Crear tarea", 
    "plus", 
    "nuevo.svg",
    function () {
        container.innerHTML = "";
        container.appendChild(Contactos());
    }
));

let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(Contactos());

async function tareas() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);

    } catch (error) {
        console.log(error);
    }
}

tareas();

console.log("Completado")