function Perfil() {
  const section = document.createElement("section");
  section.className = "perfil";

  const h2 = document.createElement("h2");
  h2.textContent = "Perfil";

  const pNombre = document.createElement("p");
  pNombre.textContent = "Usuario: Diego";

  const pApellido = document.createElement("p");
  pApellido.textContent = "Usuario: Mauricio";

  const pRol = document.createElement("p");
  pRol.textContent = "Rol: Administrador";

  section.appendChild(h2);
  section.appendChild(pNombre);
  section.appendChild(pApellido);
  section.appendChild(pRol);

  return section;
}

export { Perfil };
