import { getContactsFromStorage, saveContactsToStorage }
  from '../common/LocalStorage/Storagecontacto.js';

function ItemContacto(contacto, onDelete) {
  const div = document.createElement("div");
  div.className = "item-contacto";

  const etiquetaImg = document.createElement("img");
  etiquetaImg.src = `./src/assets/icons/${contacto.img}`;
  etiquetaImg.alt = "Contacto";

  const etiquetaNombre = document.createElement("p");
  etiquetaNombre.className = "contacto-nombre";
  etiquetaNombre.textContent = contacto.nombre;

  const etiquetaTelefono = document.createElement("p");
  etiquetaTelefono.className = "contacto-telefono";
  etiquetaTelefono.textContent = contacto.telefono;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";

  div.appendChild(etiquetaImg);
  div.appendChild(etiquetaNombre);
  div.appendChild(etiquetaTelefono);
  div.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    if (confirm("¿Eliminar este contacto?")) {
      const contactos = getContactsFromStorage()
        .filter(c => c.id !== contacto.id);
      saveContactsToStorage(contactos);
      div.remove();
      if (onDelete) onDelete(contacto);
    }
  });

  return div;
}

export { ItemContacto };
