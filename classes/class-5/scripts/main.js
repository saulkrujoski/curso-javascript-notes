console.log("--> Bienvenidos a la clase 5: Objetos <--");


// definición de un objeto (literal)
let persona1 = {
    nombre: "Homero",
    apellido: "Simpson",
    direccion: "Av. Siempreviva 123",
    edad: 39,
    trabajo: "tecnico de seguridad sector 7G",
}

/* console.log("--> Datos del objeto completo",persona1);
console.log("--> Otra forma de mostrar los datos completos");
console.log(persona1); */

// Mostrar o acceder a los datos individuales
/* console.log("--> Apellido", persona1.apellido);
console.log("--> Nombre", persona1.nombre); */

// Acceder a las propiedades con corchetes
/* console.log("--> Apellido: ", persona1["apellido"]);
console.log("--> Nombre: ", persona1["nombre"]); */


// Modificar valores de propiedades
/* persona1.nombre = prompt("Ingrese un nombre")
persona1["apellido"] = prompt("Ingrese un apellido");

console.log(persona1); */

// Construcción de objetos con funciones
// El nombre del constructor tiene que tener sentido para mí dentro del contexto, lo que dicho de otra manera, el nombre de este me debe dar una clara impresión de QUÉ ESTOY CREANDO (qué es esto, que forma tiene, que atributos puedo usar de este y cuáles no, ¿tiene funcionalidad?, ¿cuáles?).
/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const personaAuxiliar = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona3 = new Persona("Marge", 36, "Av. Siempreviva 742");

console.log(personaAuxiliar);
console.log(persona3); */

// A pedido de Tomás, hacemos un pequeño ejemplito de cómo capturar datos de la UI.
/* function Profesor(nombre, apodo, curso) {
    this.nombre = nombre;
    this.apodo = apodo;
    this.curso = curso;
}

let name = prompt("Ingrese el nombre");
let nickname = prompt("Ingrese el apodo");
let course = prompt("Ingrese el nombre del curso");
let unProfesor = new Profesor(name, nickname, course);
console.log("--> valores que asignamos a nuestro Profesor", unProfesor); */


// Definición de un método (función dentro de un objeto)
/* function Profesor(nombre, apodo, curso) {
    this.nombre = nombre;
    this.apodo = apodo;
    this.curso = curso;
    this.saludar = function () {
        return "Hola, bienvenidos al curso de " + this.curso + ", mi nombre es " + this.nombre + ". Pero puedes llamarme " + this.apodo;
    }
    this.apellidoNombre = function () {
        return this.nombre + ", " + this.apodo
    }
    this.toString = function () {
        return this.nombre
    }
}

let unProfesor = new Profesor("Pepe", "Capo", "JavaScript"); */
/* const saludo = unProfesor.saludar();

console.log(saludo);
alert(saludo);
alert(unProfesor.apellidoNombre());
alert(unProfesor); */

// Recorrer cada una de las propiedades de un objeto (para lo que sea)
/* for (const propiedad in unProfesor) {
    console.log(unProfesor[propiedad]);
} */


// Definción de una clase
/* class Persona {
    constructor(nombre, apodo, curso) {
        this.nombre = nombre;
        this.apodo = apodo;
        this.curso = curso;
    }

    saludar() {
        return "Hola, bienvenidos al curso de " + this.curso + ", mi nombre es " + this.nombre + ". Pero puedes llamarme " + this.apodo;
    }

    apellidoNombre() {
        return this.nombre + ", " + this.apodo
    }

    toString() {
        return this.nombre
    }
}
const unaPersona = new Persona("Homero J. Simpson", "Homero", "JS");
console.log(unaPersona.saludar()); */

// Ejercicio en vivo: Definir y crear un objeto con las propiedades: nombre, descripción, categoría (cadena de texto que representa la categoría), marca, precio unitario y stock.

class Producto {
    // Inicialización
    nombre = "";
    descripcion = "";
    categoria = "";
    marca = "";
    precioUnitario = "";
    codigoProducto = "";
    stock = 0;

    // Constructor de la clase
    constructor(nombre, descripcion, categoria, marca, precioUnitario,
        codigoProducto, stock) {
        this.nombre = nombre.trim();
        this.descripcion = descripcion.trim();
        this.categoria = categoria.trim();
        this.marca = marca.trim();
        this.precioUnitario = precioUnitario;
        this.codigoProducto = codigoProducto.trim();
        this.stock = stock;
    }

    // Definición de funciones (métodos fuera de la clase)
    toString() {// no requiere parámetro
        return this.descripcion + " (" + this.codigoProducto + ")"
    }

    calcularSubtotal(cantidad) {// requiere un parámetro
        return cantidad * this.precioUnitario
    }
}

// Instanciamos (creamos) un objeto de la clase Producto
const unProducto = new Producto("   Harina    ", "    Harina de trigo 4/0    ", "Amacen", "Cañuelas", 764.54, "     12345642432436    ", 100);

// Imprimimos por consola datos del objeto
console.log(unProducto);// ejecuta internamente el método toString() sin necesidad de pedirlo
console.log(unProducto.toString());
console.log(unProducto.calcularSubtotal(5).toFixed(2));