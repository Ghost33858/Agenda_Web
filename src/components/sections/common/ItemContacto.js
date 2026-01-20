const ItemContacto = (imgContacto, nombre, telefono) => {
  const div = document.createElement("div");
  div.className = "item-contacto";

  const etiquetaImg = document.createElement("img");
  etiquetaImg.src = `./src/assets/icons/${imgContacto}`;
  etiquetaImg.alt = "Contacto";

  const etiquetaNombre = document.createElement("p");
  etiquetaNombre.className = "contacto-nombre";
  etiquetaNombre.textContent = nombre;

  const etiquetaTelefono = document.createElement("p");
  etiquetaTelefono.className = "contacto-telefono";
  etiquetaTelefono.textContent = telefono;

  div.appendChild(etiquetaImg);
  div.appendChild(etiquetaNombre);
  div.appendChild(etiquetaTelefono);

  return div;
};

export { ItemContacto };
