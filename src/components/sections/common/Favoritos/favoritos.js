import { ItemContacto } from "../ItemContacto.js";
import { getContactsFromStorage } from "../../../sections/common/LocalStorage/Storagecontacto.js";

export function Favoritos() {
    const section = document.createElement("section");
    
    // Quitamos la estrella del título
    section.innerHTML = "<h2>Mis Favoritos</h2>";

    const container = document.createElement("div");
    container.className = "contactos";

    const todosLosContactos = getContactsFromStorage();
    
    // Filtramos para obtener solo los marcados como favoritos
    const soloFavoritos = todosLosContactos.filter(c => c.favorite === true);

    if (soloFavoritos.length === 0) {
        // Quitamos la estrella del mensaje de aviso
        container.innerHTML = "<p>No tienes contactos favoritos aún.</p>";
    } else {
        soloFavoritos.forEach(contacto => {
            // Pasamos una función para refrescar la vista si se desmarca un favorito
            container.appendChild(ItemContacto(contacto, () => {
                const mainContainer = document.getElementById("container");
                mainContainer.innerHTML = "";
                mainContainer.appendChild(Favoritos());
            }));
        });
    }

    section.appendChild(container);
    return section;
}