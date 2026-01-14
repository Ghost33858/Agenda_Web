import { ContactList  } from "../Contacto/db.js";
function NewContactForm(miFuncion) {
    let form = document.createElement("form");
    form.className = "new-contact-form";

    let title = document.createElement("h2");
    title.textContent = "Nuevo Contacto";
    form.appendChild(title);

    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre:";
    labelNombre.htmlFor = "nombre";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    inputNombre.name = "nombre"; 
    inputNombre.required = true;
    inputNombre.placeholder = "Ej: 12345678";

    let labelTelefono = document.createElement("label");
    labelTelefono.textContent = 
}


  FormData.addEventListener("submit", (e) => {
    e.preventDefault();

    let contacto = {
        nombre : inputNombre.value,
        telefono : inputTelefono.value
    };

    console.log(contacto);

  });

  return form;
};

export { NewContactForm };
