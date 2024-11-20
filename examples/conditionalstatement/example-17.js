/**
 * Ejemplo 17: Imaginar cómo en un documento online, cuando trabajas con diferentes colaboradores, cada uno de estos tiene un rol que le permite realizar ciertas acciones sobre él. Si el rol del usuario  es "administrador", tiene acceso total; si es "editor", posee acceso parcial; si es "lector", solo puede ver contenido.
 */

const role = prompt("¿Cuál es el rol del usuario?");

if (role.trim().toLowerCase() === "administrador") {
    alert("Tienes acceso total.");
} else if (role.trim().toLowerCase() === "editor") {
    alert("Tienes acceso limitado");
} else if (role.trim().toLowerCase() === "lector") {
    alert("Solo puedes leer el contenido.");
} else {
    alert("Rol de usuario no identificado");
}
