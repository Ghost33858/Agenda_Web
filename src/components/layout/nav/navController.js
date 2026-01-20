import { Contactos } from "../../sections/Contacto/Contactos";
import { NewContactForm } from "../../sections/NewContactForm/NewContactForm";

let container = document.getElementById("container");

let viewContacts = function () {
    containerRule.innerHtml = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function () {
    container,innerHtml = "";
    container.appendChild(NewContactForm());
}

let viewNewTodo = function () {
    container.innerHTML = "";
    container.appendChild(Newtodoform());
}

export { viewContacts, viewNewContacts, viewNewTodo };