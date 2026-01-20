import { Contactos } from "../../sections/Contacto/Contactos";
import { NewContactForm } from "../../sections/NewContactForm/NewContactForm";
import { NewTodoForm } from "../../../components/sections/common/newtodoform/newtodoform.js"

let container = document.getElementById("container");

let viewContacts = function () {
    container.innerHtml = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function () {
    container.innerHtml = "";
    container.appendChild(NewContactForm());
}

let viewNewTodo = function () {
    container.innerHTML = "";
    container.appendChild(NewTodoForm());
}

export { viewContacts, viewNewContacts, viewNewTodo };