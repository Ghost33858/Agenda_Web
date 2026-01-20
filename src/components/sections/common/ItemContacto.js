import { getContactsFromStorage, saveContactsToStorage } from '../common/LocalStorage/Storagecontacto.js';

function ItemContacto(contact, onDelete) {
  const div = document.createElement("div");
  div.className = "item-contacto";

  // Nombre
  const etiquetaNombre = document.createElement("p");
  etiquetaNombre.className = "contacto-nombre";
  etiquetaNombre.textContent = contact.nombre;

  // Teléfono
  const etiquetaTelefono = document.createElement("p");
  etiquetaTelefono.className = "contacto-telefono";
  etiquetaTelefono.textContent = contact.telefono;

  // Botón eliminar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";

  div.appendChild(etiquetaNombre);
  div.appendChild(etiquetaTelefono);
  div.appendChild(deleteBtn);

  // Funcionalidad del botón eliminar
  deleteBtn.addEventListener("click", () => {
    if (confirm("¿Eliminar este contacto?")) {
      const contactos = getContactsFromStorage().filter(c => c.id !== contact.id);
      saveContactsToStorage(contactos);
      div.remove();
      if (onDelete) onDelete(contact);
    }
  });

  return div;
}

export { ItemContacto };
