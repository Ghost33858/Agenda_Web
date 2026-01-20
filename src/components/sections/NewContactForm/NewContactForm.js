import { ContactList } from "../Contacto/db.js";

function NewContactForm(miFuncion) {
  let form = document.createElement("form");
  form.className = "new-contact-form";

  let title = document.createElement("h2");
  title.textContent = "Nuevo Contacto";
  form.appendChild(title);

  // ===== Nombre =====
  let labelNombre = document.createElement("label");
  labelNombre.textContent = "Nombre:";
  labelNombre.htmlFor = "nombre";

  let inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.id = "nombre";
  inputNombre.name = "nombre";
  inputNombre.required = true;
  inputNombre.placeholder = "Ej: Juan Pérez";

  // ===== Teléfono =====
  let labelTelefono = document.createElement("label");
  labelTelefono.textContent = "Teléfono:";
  labelTelefono.htmlFor = "telefono";

  let inputTelefono = document.createElement("input");
  inputTelefono.type = "text";
  inputTelefono.id = "telefono";
  inputTelefono.name = "telefono";
  inputTelefono.required = true;
  inputTelefono.placeholder = "Ej: 12345678";

  // ===== Botón =====
  let button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Guardar";

  // ===== Agregar al form =====
  form.appendChild(labelNombre);
  form.appendChild(inputNombre);
  form.appendChild(labelTelefono);
  form.appendChild(inputTelefono);
  form.appendChild(button);

  // ===== Evento submit =====
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let contacto = {
      nombre: inputNombre.value,
      telefono: inputTelefono.value
    };

    console.log(contacto);

    // si quieres ejecutar una función externa
    if (miFuncion) {
      miFuncion(contacto);
    }
  });

  return form;
}

export { NewContactForm };
