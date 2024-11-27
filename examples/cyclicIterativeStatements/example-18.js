/**
 * Ejemplo 18: En un centro de control meteorológico a final de mes se confeccionan informes que deben ser entregados, aquí mostrar el promedio de temperaturas durante el mes, la temperatura más elevada y la más baja (y los días que ocurrió). Para resolver esto, el operador deberá cargar las temperaturas una a una durante los últimos 30 días, y mientras se ingresan los datos, se debe llevar el cálculo de la suma total, identificar la temperatura más baja y la más alta (y el día), al final del proceso imprimir el promedio, la temperatura más baja y más alta y los días en los que ocurrió cada una de estas.
 */

const CANTIDAD_DIAS = 30;

let temperatura = parseFloat(prompt("Ingrese temperatura para el día 1"));
console.log("Temperatura ingresada para el día 1: " + temperatura.toFixed(2));

// aquí tomamos los valores iniciales (primera iteración)
let suma = temperatura;
let temp_mas_alta = temperatura;
let dia_temp_alta = 1;
let temp_mas_baja = temperatura;
let dia_temp_baja = 1;

for (let dia = 2; dia <= CANTIDAD_DIAS; dia++) {
    temperatura = parseFloat(prompt("Ingrese temperatura para el día " + dia.toString()));
    console.log("Temperatura ingresada para el día " + dia.toString() + ": " + temperatura.toFixed(2));
    suma = suma + temperatura;
    if (temperatura > temp_mas_alta) {
        temp_mas_alta = temperatura;
        dia_temp_alta = dia;
    } else if (temperatura < temp_mas_baja) {
        temp_mas_baja = temperatura;
        dia_temp_baja = dia;
    }
}

const promedio = suma / CANTIDAD_DIAS;
alert("INFORME:\nPromedio de temperaturas: " + promedio.toFixed(2) + "\nTemperatura más baja: " + temp_mas_baja.toFixed(2) + " el día " + dia_temp_baja + "\nTemperatura más alta: " + temp_mas_alta.toFixed(2) + " el día " + dia_temp_alta);