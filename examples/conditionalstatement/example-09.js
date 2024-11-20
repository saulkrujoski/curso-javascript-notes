/**
 * Ejemplo 9: Suponer que en una fábrica hay incentivos otorgados a aquel personal que supera un umbral de producción, para este caso vamos a otorgar un incentivo de $ 200.000,00 a aquellos individuos que superen la producción mínima de 30.000 unidades.
 */

const frase = prompt("Ingrese la frase");
const palabra = prompt("Palabra no permitida");

const resultado = frase.trim().toLowerCase().includes(palabra.trim().toLowerCase());
if (resultado) {
    alert("El mensaje cuenta con vocabulario no permitido en la conversación!");
}