// Muestra éxito 
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

// Muestra error 
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Validaciones al click en "Registrarme"
document.getElementById("regBtn").addEventListener("click", function (event) {
  event.preventDefault(); // <- clave para que no se recargue

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const terminos = document.getElementById("terminos").checked;

   // Validaciones (sin espacios entre comillas)
   if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "") {
        showAlertError("Algo ta mal");
        return;
    }

  if (password1.length < 6) {
    return showAlertError("La contraseña debe tener al menos 6 caracteres.");
  }
  if (password1 !== password2) {
    return showAlertError("Las contraseñas no coinciden.");
  }
  if (!terminos) {
    return showAlertError("Aceptar los términos y condiciones.");
  }

  // Todo OK
  showAlertSuccess();
});