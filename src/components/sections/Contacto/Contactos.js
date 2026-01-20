import { ItemContacto } from "../common/ItemContacto.js";
import { ContactList } from "./db.js";


let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "contactos";
    sectionContactos.appendChild(h2);

    ContactList.forEach((contact) => {
        sectionContactos.appendChild(ItemContacto("person.svg",
            contact.nombre, contact.telefono));
    });

    return sectionContactos;
};

export { Contactos };