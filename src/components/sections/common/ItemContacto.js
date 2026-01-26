import { getContactsFromStorage, saveContactsToStorage } 
  from '../common/LocalStorage/Storagecontacto.js';

function ItemContacto(contacto, onUpdate) {
  const item = document.createElement("div");
  item.className = "tarjeta-contacto";
  item.innerHTML = `
    <div class="contacto-info-principal">
        <button class="btn-fav">${contacto.favorite ? '⭐' : '☆'}</button>
        <img src="./src/assets/icons/${contacto.img || 'user.svg'}" alt="Contacto" class="contacto-img">
        <div class="contacto-detalles">
            <span class="contacto-nombre">${contacto.nombre}</span>
            <span class="contacto-telefono">${contacto.telefono}</span>
        </div>
    </div>
    <button class="btn-eliminar">Eliminar</button>
  `;

  const btnFav = item.querySelector(".btn-fav");
  btnFav.addEventListener("click", () => {
    const contactos = getContactsFromStorage();
    const index = contactos.findIndex(c => c.id === contacto.id);

    if (index !== -1) {
      contactos[index].favorite = !contactos[index].favorite;
      saveContactsToStorage(contactos);
      if (onUpdate) onUpdate();
    }
  });

  const btnEliminar = item.querySelector(".btn-eliminar");
  btnEliminar.addEventListener("click", () => {
    if (confirm(`¿Eliminar a ${contacto.nombre}?`)) {
      const contactos = getContactsFromStorage().filter(c => c.id !== contacto.id);
      saveContactsToStorage(contactos);
      
      item.remove(); 
      if (onUpdate) onUpdate(); 
    }
  });

  return item;
}

export { ItemContacto };