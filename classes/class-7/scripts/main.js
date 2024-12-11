console.log("--> Bienvenidos a la clase 6: Funciones de Orden Superior <--");

function mayorQue(n) {// Devuelvo una función
    return (m) => m > n
}

let mayorQueDiez = mayorQue(10);
// let mayorQueDiez = (m) => m > n
// let mayorQueDiez = (m) => m > 10
console.log("¿Es 12 mayor a 10?", mayorQueDiez(12))  //  true
// let mayorQueDiez = (12) => 12 > 10 --> true
console.log("¿Es 8 mayor a 10?", mayorQueDiez(8))  //  false
// let mayorQueDiez = (8) => 8 > 10   --> false

// Función genérica para recorrer elementos dentro de un array ("cualquiera"), y ejecutar una función ("cualquiera") que recibe como parámetro un elemento del array que se recorre.
/* function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

// Ejemplo aplicado con números.
const numeros = [1, 2, 3, 4];

porCadaUno(numeros, console.log)

// Otro ejemplo de aplicación de una función, aquí creamos nuestra propia función para mostrar por consola el doble de cada número de dentro del array
const doble = (n) => {
    console.log(n * 2);
}

console.log("--> Acá vamos a calcular el doble de cada elemento");
porCadaUno(numeros, doble);

// Alteramos la funcionalidad del ejemplo anterior para capturar el resultado en un array en vez de en consola y poder usarlo. Generamos un array con el doble de todos los números en un array. El array resultante tiene la misma cantidad de elementos que el original.
const resultado = [];

const generarDobles = (n) => {
    resultado.push(n * 2);
} */

// forEach
/* const numeros = [1, 2, 3, 4, 5, 6]
const personas = [{nombre: "Saúl", edad: 24}, {nombre: "Sandra", edad: 21}]
// 
const miFuncion = (elemento) => {
    // Acá hay algo para hacer
}
numeros.forEach((numero) => {
    console.log(numero * 2);
})

personas.forEach((persona) => {
    console.log("Hola, " + persona.nombre);
}) */

// .find
/* const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 22000 },
    { nombre: 'ReactJS', precio: 36000 },
    { nombre: 'Desarrollo Web (Maquetación)', precio: 22000 },
    { nombre: 'Backend con next', precio: 22000 },
]

/* const react = cursos.find((unCurso) => unCurso.nombre === "ReactJS")
const unCursoCualquiera = cursos.find((el) => el.nombre === "DW")

console.log(react)
console.log(unCursoCualquiera)

// .filter
const conReusltados = cursos.filter((unCurso) => unCurso.nombre.includes('JS'));
const sinResultados = cursos.filter((unCurso) => unCurso.precio < 14000);

console.log(conReusltados)
console.log(sinResultados) // [] */

/* const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 22000 },
    { nombre: 'Desarrollo Web', precio: 16000 },
]

const nombres = cursos.map((unCurso) => unCurso.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]
const nuevosPrecios = cursos.map((unCurso) => {
    return {
        nombre: unCurso.nombre,
        precio: unCurso.precio * 1.15,
        incremento: unCurso.precio * 0.15,
        descuento: unCurso.precio * 0.60,
        precioAnterio: unCurso.precio
    }
})
console.log(nuevosPrecios) */


// .reduce
/* const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21 */


// -sort
/* const numeros = [40, 1, 5, 200];
console.log(numeros.sort((a, b) => a - b));  // [ 1, 5, 40, 200 ]
console.log(numeros.sort((a, b) => b - a));  // [ 200, 40, 5, 1 ] */

