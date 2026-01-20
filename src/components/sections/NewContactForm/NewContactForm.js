import { ContactList } from "../Contacto/db.js";

function NewContactForm(miFuncion) {
  const form = document.createElement("form");
  form.className = "new-contact-form";

  const title = document.createElement("h2");
  title.textContent = "Nuevo Contacto";
  form.appendChild(title);

  // Nombre
  const labelNombre = document.createElement("label");
  labelNombre.textContent = "Nombre:";
  labelNombre.htmlFor = "nombre";

  const inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.id = "nombre";
  inputNombre.name = "nombre";
  inputNombre.required = true;
  inputNombre.placeholder = "Ej: Juan Pérez";

  // Teléfono
  const labelTelefono = document.createElement("label");
  labelTelefono.textContent = "Teléfono:";
  labelTelefono.htmlFor = "telefono";

  const inputTelefono = document.createElement("input");
  inputTelefono.type = "text";
  inputTelefono.id = "telefono";
  inputTelefono.name = "telefono";
  inputTelefono.required = true;
  inputTelefono.placeholder = "Ej: 12345678";

  // Botón
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Guardar";

  // Agregar elementos al form
  form.append(labelNombre, inputNombre, labelTelefono, inputTelefono, button);

  // Evento submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Crear objeto contacto
    const contacto = {
      id: Date.now(), // id único
      nombre: inputNombre.value.trim(),
      telefono: inputTelefono.value.trim()
    };

    // Agregar a la lista global
    ContactList.push(contacto);

    console.log("Contacto guardado:", contacto);

    // Ejecutar función callback (por ejemplo para recargar lista)
    if (miFuncion) {
      miFuncion();
    }

    // Limpiar formulario
    form.reset();
  });

  return form;
}

export { NewContactForm };
