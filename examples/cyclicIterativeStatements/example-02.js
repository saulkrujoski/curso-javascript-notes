/**
 * Ejemplo 2: Así cómo escribíamos las tablas de multiplicar en nuestros cuadernos cuando éramos pequeños, aquí abordaremos el uso de un ciclo repetitivo para construir una tabla de multiplicar, para ello solicitamos al usuario un número entero y construiremos dicha solución del 1 al 10.
 */

const numero = parseInt(prompt("Ingresa un número del 1 al 10 para construir su tabla de multiplicar."));

if (numero == NaN || !(numero >= 1 && numero <= 10)) {
    alert("Debes ingresar un número entero entre 1 y 10");
} else {
    // multiplicando --> i
    // multiplicador --> numero
    // producto      --> numero * i
    for (let i = 1; i <= 10; i++) {
        console.log(numero.toString() + " * " + i.toString() + " = " + (numero * i).toString());
    }
}
