/**
 * Ejemplo 10: Uno de los casos más generales y el más útil en la mayoría de los sistemas, es la incorporación de validación de usuarios mediante la autenticación de contraseñas para el ingreso. Por ello es que debemos contar con un algoritmo para validar la contraseña ingresada por el usuario contra la almacenada en la base de datos.
 */

const userNameProvided = prompt("Ingrese el nombre de usuario");
const passwordProvided = prompt("Ingrese la contraseña de acceso");
const savedPassword = "123456789";
const savedUserName = "Chaman";

if ((passwordProvided !== savedPassword) || (userNameProvided !== savedUserName)) {
    alert("Las credenciales proporcionadas no son correctas");
}