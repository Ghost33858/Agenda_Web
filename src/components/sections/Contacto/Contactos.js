import { ItemContacto } from "../common/ItemContacto.js";
import { getContactsFromStorage } from "../common/LocalStorage/Storagecontacto.js";
import { NewContactForm } from "../NewContactForm/NewContactForm.js";

function Contactos() {
    const section = document.createElement("section");
    section.className = "contactos";

    const h2 = document.createElement("h2");
    h2.textContent = "Contactos";

    const list = document.createElement("div");

    const contactos = getContactsFromStorage();
    contactos.forEach(contacto => {
        list.appendChild(ItemContacto(contacto));
    });

    section.appendChild(h2);
    section.appendChild(list);

    return section;
}

export { Contactos };
