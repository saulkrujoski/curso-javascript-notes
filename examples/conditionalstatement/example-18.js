/**
 * Ejemplo 18: Nos encontramos regularmente con este tipo de situaciones, en filas de bancos por ejemplo, suponiendo que al momento de solicitar un turno a través del tótem de la entrada, el sistema puede identificar la edad del cliente y si posee condiciones que requieren incrementar su prioridad de atención. Para el algoritmo diremos que una persona tiene prioridad de paso si es mayor de 60 años o tiene condiciones particulares; de lo contrario, se mantiene en el orden regular.
 */

const age = parseInt(prompt("Edad de la persona"));
const hasParticularConditions = confirm("Posee condiciones particulares");
const ageLimit = 60;

if (age > ageLimit || hasParticularConditions) {
    alert("Poner a la persona en la lista de prioridad.");
} else {
    alert("Poner a la persona en la lista habitual.");
}
