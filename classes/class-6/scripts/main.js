console.log("--> Bienvenidos a la clase 6: Arrays <--");

/* // Instanciamos (creamos) un objeto de la clase Producto
const unProducto = new Producto("   Harina    ", "    Harina de trigo 4/0    ", "Amacen", "Cañuelas", 764.54, "     12345642432436    ", 100);

// Imprimimos por consola datos del objeto
console.log(unProducto);// ejecuta internamente el método toString() sin necesidad de pedirlo
console.log(unProducto.toString());
console.log(unProducto.calcularSubtotal(5).toFixed(2)); */

// Definición
const listaDeLibros = ["El alquimista", "Soñando el sol", "Harry Potter"];
console.table(listaDeLibros);

// Ejemplo de cómo acceder a un elemento dentro del array
/* console.log("El libro almacenado en el index número 2 es: ".concat(listaDeLibros[1])); */

// Ejemplo de cómo operar con los elementos de un array
/* const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]) // 1; 
console.log(numeros[3]) // 4; 
let resultado = numeros[1] + numeros[2]
console.log(resultado) // 5; */


// Ejemplo de cómo recorrer un array
/* for (let index = 0; index < listaDeLibros.length; index++) {
    alert(listaDeLibros[index]);
} */

// Diferencias sutiles entre undefined y null
let esto;// esto es un undefined
let estoOtro = null;// acá hay una inicialización

// Qué es la propiedad length
console.log("El array tiene " + listaDeLibros.length.toString() + " elementos almacenados.");

// Nuevo array con numéros
/* const misNumeros = [];

let numero = parseFloat(prompt("Ingrese la calificación de un estudiante. CERO (0) para finalizar"));

// push    --> incluir elementos la final
// unshift --> incluir elementos al principio

while (numero !== NaN && numero > 0) {
    //misNumeros.push(numero);
    misNumeros.unshift(numero);
    console.table(misNumeros);
    numero = parseFloat(prompt("Ingrese la calificación de un estudiante. CERO (0) para finalizar"));
} */

// Ejemplos de cómo eliminar elementos tanto del principio como del final

/* const numerosAEliminar = [100, 2, 3, 4, 5, 6, 7, 8, 9, 200];

console.table(numerosAEliminar);
// Shift para eliminar el primero
const resultadoShift = numerosAEliminar.shift()
console.log(resultadoShift);
console.table(numerosAEliminar);
// Pop para eliminar el último
const resultadoPop = numerosAEliminar.pop();
console.log(resultadoPop);
console.table(numerosAEliminar); */

// Eliminar elementos de un array
/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
//     index       0        1         2       3        4
console.log(nombres);
const index = parseInt(prompt("¿A partir de qué nombre quieres eliminar los demás?"))
const count = parseInt(prompt("¿Cuántos elementos quieres eliminar desde el elemento en la posición " + index.toString() + "?"))
nombres.splice(index - 1, count);

console.log(nombres);
// ['Rita', 'Ana', 'Vanesa'] */

// Método Join
/* const resultadoDeGiones = listaDeLibros.join(" - ");
console.log(resultadoDeGiones);

const resultadoDeComas = listaDeLibros.join(", ");
console.log(resultadoDeComas);  */

// Concatenación
/* const perros = ["Pupy", "Ronnie"];
const gatos = ["Mishi", "Garfield", "Zuri"];
const mascotasPerrosPrimeros = perros.concat(gatos)
console.log(mascotasPerrosPrimeros)
// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]

const mascotasGatosPrimeros = gatos.concat(perros)
console.log(mascotasGatosPrimeros)
// ["Mishi", “Garfield”, "Zuri", "Pupy", “Ronnie”]

// Imprimimos los elementos de los dos arrays para comprobar que sus estructuras (elementos) no fueron alterados
console.table({perros,gatos}); */

// Obtener un nuevo array con una porción de elementos de otro array
/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
//     index       0        1         2       3        4
console.log(nombres);
const index = parseInt(prompt("¿A partir de qué nombre quieres obtener los nombres?"))
const index2 = parseInt(prompt("¿Hasta qué nombre quieres obtener los nombres?"))
const listaReducida = nombres.slice(index, index2+1);

console.table(nombres);
console.table(listaReducida); */

// Cómo buscar un elemento dentro del array conociendo su índice
/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.table(nombres);
const nombreBuscado = prompt("¿A quién buscas?");

console.log(nombres.indexOf(nombreBuscado)); */

// Cómo buscar un elemento dentro del array solo sabemos si está o no.
/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.table(nombres);
const nombreBuscado = prompt("¿A quién buscas?");

console.log(nombres.includes(nombreBuscado)); */

// Alterar el orden de un array
/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.table(nombres)
nombres.reverse();
console.table(nombres); */


// Combinación de arrays con objetos

// Ejercicio en vivo visto en la clase 5: Definir y crear un objeto con las propiedades: nombre, descripción, categoría (cadena de texto que representa la categoría), marca, precio unitario y stock.

/* class Producto {
    // Inicialización
    nombre = "";
    precioUnitario = "";
    stock = 0;

    // Constructor de la clase
    constructor(nombre, precioUnitario) {
        this.nombre = nombre.trim().toUpperCase();
        this.precioUnitario = precioUnitario;
        this.stock = 10;
    }

    // Definición de funciones (métodos fuera de la clase)
    toString() {// no requiere parámetro
        return this.nombre
    }

    calcularSubtotal(cantidad) {// requiere un parámetro
        return cantidad * this.precioUnitario
    }

    calcularTotalesStock() {// requiere un parámetro
        return (this.stock * this.precioUnitario).toFixed(2)
    }
}

const productos = [];
let nombre = prompt("Ingrese el nombre del producto");

// Carga dinámica
while (nombre !== "") {
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    //const unProducto = new Producto(nombre,precio);
    //productos.push(unProducto);
    productos.push(new Producto(nombre, precio));
    console.table(productos);
    nombre = prompt("Ingrese el nombre del producto");
}

// Recorrer de formá dinámica un array (cualquiera)
for (const unProducto of productos) {
    debugger
    console.log("El producto " + unProducto.toString() + " me generara un ingreso de $ " + unProducto.calcularTotalesStock().toString());
} */


// Otro ejemplo complementario con la combinación de arrays y objetos
// Para este caso vamos a crear una lista de cursos (como los dictados por Coder House) y a cada curso le vamos a asignar un número de estudiantes, y con este cupo vamos a ir añadiendo nimámicamente tantos estdudintes como querramos o la capacidad del curso nos lo pemrita.
/* class Curso {
    // Inicialización
    nombre = "";
    capacidad = 0;
    estudiantes = [];

    // Constructor de la clase
    constructor(nombre, capacidad) {
        this.nombre = nombre.trim().toUpperCase();
        this.capacidad = capacidad;
        this.estudiantes = [];
    }

    // Definición de funciones (métodos fuera de la clase)
    toString() {// no requiere parámetro
        return this.nombre
    }

    addEstudiante(nombre) {
        this.estudiantes.push(nombre);
    }

    getEstudiantes() {
        return this.estudiantes;
    }

    getCupoDisponible() {
        return this.capacidad - this.estudiantes.length
    }
}

const cursos = [];
let nombre = prompt("Ingrese el nombre del curso");

// Carga dinámica
while (nombre !== "") {
    let capacidad = parseInt(prompt("Ingrese la capacidad del curso"));
    const unCurso = new Curso(nombre, capacidad);

    // Añadir estudiantes (inscripciones)
    let nombreEstudiante = prompt("Ingrese el nombre de un estudiante para inscribirse en el curso de " + unCurso.toString());
    while (nombreEstudiante !== "" && unCurso.getEstudiantes().length < unCurso.capacidad) {
        // Esta condición (unCurso.getEstudiantes().length < unCurso.capacidad) la podemos escribir de otra forma aprovechando los métodos de la clase Curso
        unCurso.addEstudiante(nombreEstudiante);
        console.log("El curso " + unCurso.toString() + " le resta una capacidad de " + unCurso.getCupoDisponible().toString() + " estudiantes.");
        nombreEstudiante = prompt("Ingrese el nombre de un estudiante para inscribirse en el curso de " + unCurso.toString());
    }

    cursos.push(unCurso);
    console.table(cursos);
    nombre = prompt("Ingrese el nombre del curso");
}

// Recorrer de formá dinámica un array (cualquiera)
for (const unCurso of cursos) {
    console.log("El curso " + unCurso.toString() + " tiene inscriptos a " + unCurso.getEstudiantes().length.toString() + " estudiantes. Estos son los siguientes: " + unCurso.getEstudiantes().join(", "));
} */