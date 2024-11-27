/**
 * Ejemplo 8: Estás trabajando en el algoritmo que calcula los intereses sobre una cuenta, tú trabajo es iterar durante N años para calcular cómo crece el saldo con un interés fijo. Dónde el saldo es un número decimal, N es un número entero y el interés es un número decimal, proporcionados por el usuario.
 */

const balance = parseFloat(prompt("Saldo de la cuenta"));
const years = parseInt(prompt("Cantidad de años"));
const interestRate = parseFloat(prompt("Porcentaje del interés expresado entre 0 y 100"));

const months = years * 12;

let total = balance;
const percent = interestRate / 100;

for (let index = 0; index < months; index++) {
    const increment = total * percent;
    total = total + increment;
}
alert("El saldo de la cuenta luego de " + years.toString() + " año/s es de $ " + total.toFixed(2) + " con un interés de " + interestRate.toFixed(2) + "%");