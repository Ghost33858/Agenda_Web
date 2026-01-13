import {Button} from "./components/sections/common/button.js";
import { Contactos } from "./components/sections/Contacto/Contactos.js";
let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button("Agenda", "agenda", "person.svg"));
nav.appendChild(Button("+", "plus", "nuevo.svg"));
nav.appendChild(Button("ToDoList", "todoList", "agenda.svg"));

let container = document.getElementById("container");
container.appendChild(Contactos());