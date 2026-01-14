import { ItemContacto } from "../../../../src/components/sections/common/ItemContacto.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "contactos";
    sectionContactos.appendChild(h2);

    sectionContactos.appendChild(ItemContacto("person.svg", "Pablo Maldini", "12345678"));
    sectionContactos.appendChild(ItemContacto("person.svg", "Pablo Maldini", "12345678"));
    sectionContactos.appendChild(ItemContacto("person.svg", "Pablo Maldini", "12345678"));
    sectionContactos.appendChild(ItemContacto("person.svg", "Pablo Maldini", "12345678"));
    sectionContactos.appendChild(ItemContacto("person.svg", "Pablo Maldini", "12345678"));
    sectionContactos.appendChild(ItemContacto("person.svg", "Pablo Maldini", "12345678"));

    return sectionContactos;
};

export { Contactos };