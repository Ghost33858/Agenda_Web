import { getContactsFromStorage, saveContactsToStorage } 
  from '../common/LocalStorage/Storagecontacto.js';

// --- CONTACTOS POR DEFECTO ---
const defaultContacts = [
  { id: 1, nombre: "Juan Pérez", telefono: "12345678", img: "user.svg", favorite: true },
  { id: 2, nombre: "Ana López", telefono: "87654321", img: "user.svg", favorite: true },
  { id: 3, nombre: "Carlos Ruiz", telefono: "55556666", img: "user.svg", favorite: false },
  { id: 4, nombre: "María Gómez", telefono: "44443333", img: "user.svg", favorite: false },
  { id: 5, nombre: "Luis Torres", telefono: "77778888", img: "user.svg", favorite: false }
];

// --- INICIALIZAR STORAGE SI ESTÁ VACÍO ---
const contactosInit = getContactsFromStorage();
if (!contactosInit || contactosInit.length === 0) {
  saveContactsToStorage(defaultContacts);
}

function ItemContacto(contacto, onUpdate) {
  const item = document.createElement("div");
  item.className = "tarjeta-contacto";

  item.innerHTML = `
    <div class="contacto-info-principal">
        <button class="btn-fav">${contacto.favorite ? '⭐' : '☆'}</button>
        <img src="./src/assets/icons/${contacto.img || 'user.svg'}" 
             alt="Contacto" class="contacto-img">
        <div class="contacto-detalles">
            <span class="contacto-nombre">${contacto.nombre}</span>
            <span class="contacto-telefono">${contacto.telefono}</span>
        </div>
    </div>
    <button class="btn-eliminar">Eliminar</button>
  `;

  // --- ALERTA AL HACER CLICK EN EL CONTACTO ---
  item.querySelector(".contacto-info-principal")
    .addEventListener("click", () => {
      alert(
        `📇 CONTACTO\n\nNombre: ${contacto.nombre}\nTeléfono: ${contacto.telefono}\nFavorito: ${contacto.favorite ? "Sí" : "No"}`
      );
    });

  // --- FAVORITO ---
  const btnFav = item.querySelector(".btn-fav");
  btnFav.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que dispare la alerta
    const contactos = getContactsFromStorage();
    const index = contactos.findIndex(c => c.id === contacto.id);

    if (index !== -1) {
      contactos[index].favorite = !contactos[index].favorite;
      saveContactsToStorage(contactos);
      if (onUpdate) onUpdate();
    }
  });

  // --- ELIMINAR ---
  const btnEliminar = item.querySelector(".btn-eliminar");
  btnEliminar.addEventListener("click", (e) => {
    e.stopPropagation();
    if (confirm(`¿Eliminar a ${contacto.nombre}?`)) {
      const contactos = getContactsFromStorage()
        .filter(c => c.id !== contacto.id);
      saveContactsToStorage(contactos);
      item.remove();
      if (onUpdate) onUpdate();
    }
  });

  return item;
}

export { ItemContacto };