/**
 * Ejemplo 20: Debemos monitorear el recibidos de carga de un archivo durante la subida a un servidor. Para ello vamos a simular el proceso ingresando el valor Continuar verificando el progreso de una descarga hasta completarla.
 */

let BYTES_TOTALES = parseInt(prompt("Tamaño total del archivo medido en bytes."));

// Validación del tamaño total del archivo
while (isNaN(BYTES_TOTALES) || BYTES_TOTALES <= 0) {
    alert("El tamaño del archivo debe ser un número entero superior a 0 (cero).");
    BYTES_TOTALES = parseInt(prompt("Tamaño total del archivo medido en bytes."));
}

let totalTransmitido = 0;
debugger
while (totalTransmitido < BYTES_TOTALES) {
    let recibidos = parseInt(prompt("Indica la cantidad de bytes recibidos"));

    // Validar el recibidos ingresado
    while (isNaN(recibidos) || recibidos < 0) {
        alert("Los bytes recibidos deben ser un número entero superior a 0 (cero).");
        recibidos = parseInt(prompt("Indica la cantidad de bytes recibidos"));
    }

    totalTransmitido = totalTransmitido + recibidos;

    // En caso de ingresar un valor superior, igualarlos
    if (totalTransmitido > BYTES_TOTALES) {
        totalTransmitido = BYTES_TOTALES;
    }

    const PORCENTAJE = (totalTransmitido / BYTES_TOTALES) * 100;

    // Mostrar el estado de recibidos
    alert("Progreso lleva " + PORCENTAJE.toFixed(2) + "%  del progreso.");
}

alert("Archivo descargado satisfactoriamente.");