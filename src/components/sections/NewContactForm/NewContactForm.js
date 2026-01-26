import { getContactsFromStorage, saveContactsToStorage }
  from "../common/LocalStorage/Storagecontacto.js";

function NewContactForm({ onAdd }) {
  const form = document.createElement("form");
  form.innerHTML = `<h2>Nuevo Contacto</h2>`;

  const inputNombre = document.createElement("input");
  inputNombre.placeholder = "Nombre";
  inputNombre.required = true;

  const inputTelefono = document.createElement("input");
  inputTelefono.placeholder = "Teléfono";
  inputTelefono.required = true;

  const button = document.createElement("button");
  button.textContent = "Guardar";

  form.append(inputNombre, inputTelefono, button);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const telefono = inputTelefono.value.trim();
    if (!nombre || !telefono) return;

    const contactos = getContactsFromStorage();

    const nuevoContacto = {
      id: Date.now(),
      img: "user.svg",
      nombre,
      telefono,
      favorite: false
    };

    contactos.push(nuevoContacto);
    saveContactsToStorage(contactos);

    // 🔁 solo pedir refresco
    if (onAdd) onAdd();

    form.reset();
  });

  return form;
}

export { NewContactForm };