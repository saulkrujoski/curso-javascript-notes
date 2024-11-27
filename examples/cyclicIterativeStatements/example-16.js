/**
 * Ejemplo 16: El sub-sistema de control de acceso y registro sobre usuarios de un sistema requiere probar el algoritmo para validación de contraseña, para pasar la prueba el usuario debe seguir ingresando la contraseña siempre y cuando no tenga entre 6 y 13 caracteres.
 */

const MIN_LENGTH = 6;
const MAX_LENGHT = 13;
let password = prompt("Ingrese la contraseña. Esta debe tener entre [" + MIN_LENGTH.toString() + "-" + MAX_LENGHT.toString() + "] caracteres.");
debugger
while (password.length < MIN_LENGTH || password.length > MAX_LENGHT) {
    password = prompt("La contraseña ingresada no cumple con el criterio, vuelva a intentarlo. Recuerde que debe tener entre [" + MIN_LENGTH.toString() + "-" + MAX_LENGHT.toString() + "] caracteres.");
}

alert("Contraseña validada satisfactoriamente.");