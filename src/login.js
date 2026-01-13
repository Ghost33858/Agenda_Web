let login = function () {
  // Crear el contenedor de login
  let loginSection = document.createElement("section");

  // Crear el título del login
  let h3 = document.createElement("h3");
  h3.innerHTML = "Login";

  // Crear el campo de usuario
  let user = document.createElement("input");
  user.type = "text";
  user.placeholder = "Usuario";

  // Crear el campo de contraseña
  let password = document.createElement("input");
  password.type = "password";
  password.placeholder = "Password";

  // Crear el botón
  let button = document.createElement("button");
  button.innerHTML = "Iniciar Sesion";

  // Agregar los elementos al contenedor de login
  loginSection.appendChild(h3);
  loginSection.appendChild(user);
  loginSection.appendChild(password);
  loginSection.appendChild(button);

  return loginSection;
};

export { login };
