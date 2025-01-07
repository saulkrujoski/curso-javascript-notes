console.log("--> Bienvenidos a la clase 11: Storage & JSON <--");

// Métodos para guardar y recuperar información, vamos a ver a setItem y getItem (ejemplos para uno con localStorage y otro con sessionStorage)
// Las siguientes contantes representan información en mí local y sesion storage.

// Ejemplo con un número
/* let numero = parseInt(prompt("Un número natural."));
localStorage.setItem("unNumero", numero);
let numeroRecuperado = localStorage.getItem("unNumero");
alert("El valor que tiene la clave unNumero el local storage  es: " + numeroRecuperado);
console.log("El valor que tiene la clave unNumero es: ", parseInt(numeroRecuperado)); */

/* sessionStorage.setItem("unNumeroEnSession", numero);
let numeroRecuperadoFromSession = sessionStorage.getItem("unNumeroEnSession");
alert("El valor que tiene la clave unNumeroEnSession en session es: " + numeroRecuperadoFromSession);
console.log("El valor que tiene la clave unNumeroEnSession es: ", parseInt(numeroRecuperadoFromSession)); */

// Ejemplo con un texto
/* let texto = prompt("Ingrese una frase.");
localStorage.setItem("unTexto", texto);
let textoRecuperado = localStorage.getItem("unTexto");
alert("El valor que tiene la clave unTexto el local storage  es: " + textoRecuperado);
console.log("El valor que tiene la clave unTexto es: ", textoRecuperado); */

/* sessionStorage.setItem("unTextoEnSession", textoRecuperado);
let textoRecuperadoFromSession = sessionStorage.getItem("unTextoEnSession");
alert("El valor que tiene la clave unTextoEnSession en session es: " + textoRecuperadoFromSession);
console.log("El valor que tiene la clave unTextoEnSession es: ", textoRecuperadoFromSession); */

// Ejemplo con un booleano
/* let respuesta = confirm("¿Saliste en las fiestas de fin de año?");
localStorage.setItem("unaRespuesta", respuesta);
let respuestaRecuperado = localStorage.getItem("unaRespuesta");
alert("El valor que tiene la clave unaRespuesta el local storage  es: " + respuestaRecuperado);
console.log("El valor que tiene la clave unaRespuesta es: ", respuestaRecuperado);
console.log(respuestaRecuperado == "true"); */

// Ejemplo con un Objeto literal
let usuario = {
    nombre: "Saúl",
    nickName: "ChamanDEV",
    age: 27
};

/* localStorage.setItem("unObjeto", usuario);
let unObjetoRecuperado = localStorage.getItem("unObjeto");
alert("El valor que tiene la clave unObjeto el local storage  es: " + unObjetoRecuperado);
console.log("El valor que tiene la clave unObjeto es: ", unObjetoRecuperado);
console.log(unObjetoRecuperado); */

// Ejemplo con un array de objetos literales
/* let personas = [
    { nombre: "Sandra", nickName: "LaNinia" },
    { nombre: "Pedro", nickName: "LaCoste" },
];

localStorage.setItem("unArray", personas);
let personasRecuperado = localStorage.getItem("unArray");
alert("El valor que tiene la clave unArray el local storage  es: " + personasRecuperado);
console.log("El valor que tiene la clave unArray es: ", personasRecuperado);
console.log(personasRecuperado); */

// Recuperar, ver y/o buscar información dentro de los storage con un ciclo para recorrer las claves almacenadas en el objeto localStorage (o con sessionStorage)
/* console.log("Recuperamos información del local storage"); */

/* for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
    console.log("------------------------------------");
} */

/* console.log("Recuperamos información del session storage");
for (let i = 0; i < sessionStorage.length; i++) {
    let clave = sessionStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
    console.log("------------------------------------");
} */

// Eliminar información del storage
// Eliminar una clave concreta
/* localStorage.removeItem('unObjeto');
localStorage.removeItem('unArray'); */

// Limpiar todo el storage completo
// localStorage.clear()    //elimina toda la información
// sessionStorage.clear() //elimina toda la información

// Guardar y recuperar información en formato de objeto dentro de los storages

// JSON
// Recuperar información del storage en formato de texto y convertirlo en objeto

// Ejemplo de el slide
/* const unProducto = { id: 2, nombre: "Arroz", precio: 987 };
const enTextoPlanoDeJSON = JSON.stringify(unProducto);

console.log(enTextoPlanoDeJSON);
console.log(typeof unProducto); // object
console.log(typeof enTextoPlanoDeJSON); // string

localStorage.setItem("unProductoObjet", unProducto);
localStorage.setItem("unProductoString", enTextoPlanoDeJSON);
console.log("Valor recuperado del unProductoString", JSON.parse(localStorage.getItem("unProductoString")));
console.log("Valor recuperado del unProductoObjet", JSON.parse(localStorage.getItem("unProductoObjet"))); */

/* Usar el método definido para crear y mantener la lista de Tareas para mostrar un ejemplo practico de storage con almacenamiento y recuperación. */

let tareas = [];
let ultimaTarea = null;
const DEFAULT_STATE = new State(1, "Pendiente");
const LENGGTH_LIMIT = 60;

const mapObjectToClass = (entity) => {
    return new Task(entity.id, entity.description, new State(entity.state
        .id, entity.state
        .name, entity.state
        .textColorClass, entity.state
        .bgColorClass, entity.state
        .key), new Date(entity.date));
}

const recuperarDelStorage = () => {
    // Recuperamos el objeto en formato JSON
    const tareaJSONFormat = localStorage.getItem("ultimaTarea");
    // Convertimos a un objeto "literal"
    const tareareCuperada = JSON.parse(tareaJSONFormat);
    // Convertimos el objeto tareareCuperada (objeto literal) en un objeto con el prototipo de class Task
    ultimaTarea = mapObjectToClass(tareareCuperada);
    // Vaciamos la lista de tareas para cargarla con las tareas persistidas
    tareas = [];
    // Recuperamos la lista en formato JSON
    const misTareasJSONFormat = localStorage.getItem("misTareas");
    // Convertimos la lista en formato JSON en una lista de objetos literales
    const misTareasRecuperadas = JSON.parse(misTareasJSONFormat);
    // Convertimos la lista misTareasRecuperadas (lista de objetos literales) en una lista de objetos con el prototipo de class Task
    misTareasRecuperadas.forEach((entity) => {
        const restored = mapObjectToClass(entity);
        tareas.push(restored);
    });
}

// Evaluamos si existe la lista persistida y la cargamos a la memoria.
// La primera vez que lo ejecutes sin tener nada persistido va a explotar, porque los objetos asociados a las claves son nulos, te invito a programar un salvaguardas.
recuperarDelStorage();

const buscarTereaPorNombre = (nombre) => {
    return tareas.find((task) => task.description.toLowerCase() === nombre.trim().toLowerCase());
}

const validarNombreTarea = (nombre = "") => {
    // 1) Que no sea vacía
    const default_message = "El nombre de la tarea no puede ser vacía.";
    if (!nombre) { return default_message }
    if (nombre.trim().length === 0) { return default_message }

    // 2) Limitar la cantidad máxima de caracteres - 20
    if (nombre.trim().length > LENGGTH_LIMIT) {
        return "El nombre de la tarea no puede superar los " + LENGGTH_LIMIT.toString() + " caracteres."
    }
    return null;
}

const crearTerea = (nombre) => {
    // 2) Validar algún aspecto del nombre de la tarea
    const error = validarNombreTarea(nombre);
    if (error !== null) {
        alert(error);
        return false;
    }

    // 3) Corroborar que no existan duplicados
    const tarea = buscarTereaPorNombre(nombre);
    if (tarea) {
        alert("La tarea ya existe");
        return false;
    }

    // 1) Crear una tarea
    const nuevaTarea = new Task(tareas.length + 1, nombre, DEFAULT_STATE);
    localStorage.setItem("ultimaTarea", JSON.stringify(nuevaTarea));
    // Indicar globalmente cuál es la última tarea creada
    ultimaTarea = nuevaTarea;
    // Agregar dicha tarea a la lista de tareas en memoria
    tareas.unshift(nuevaTarea);
    localStorage.setItem("misTareas", JSON.stringify(tareas));
    return true;
}

const form = document.getElementById("task-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombreTarea = form.children[0].value;
    if (crearTerea(nombreTarea)) {
        // 4) Intentar listar las tareas en la UI
        console.table(tareas);
        // 5) Limpiar el fomrualrio
        form.reset();
    }
});