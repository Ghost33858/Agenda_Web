import { Contactos } from "../../sections/Contacto/Contactos";
import { NewContactForm } from "../../sections/NewContactForm/NewContactForm";

let viewContacts = function () {
    containerRule.innerHtml = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function () {
    container,innerHtml = "";
    container.appendChild(NewContactForm());
}

export { viewContacts, viewNewContacts };