console.log("--> Bienvenidos a la clase 12: Operadores avanzados <--");

let tareas = [];
let ultimaTarea = null;
const DEFAULT_STATE = new State(1, "Pendiente");
const LENGGTH_LIMIT = 60;

const mapObjectToClass = ({ id, description, state: { id: stateId, name: stateName, textColorClass, bgColorClass, key: stateKey, }, date } = null) => {
    if (!id) { return null }
    return new Task(id, description, new State(stateId, stateName, textColorClass, bgColorClass, stateKey), new Date(date));
}

const recuperarDelStorage = () => {
    // Convertimos el objeto tareareCuperada (objeto literal) en un objeto con el prototipo de class Task
    ultimaTarea = mapObjectToClass(JSON.parse(localStorage.getItem("ultimaTarea")));

    // Convertimos la lista en formato JSON en una lista de objetos literales
    const misTareasRecuperadas = JSON.parse(localStorage.getItem("misTareas")) || [];
    // Convertimos la lista misTareasRecuperadas (lista de objetos literales) en una lista de objetos con el prototipo de class Task
    tareas = [];
    misTareasRecuperadas.forEach((entity) => {
        const restored = mapObjectToClass(entity);
        tareas.push(restored);
    });

    // Si el proyecto no necesita de prototipo de clase, podemos dejar en una sola línea de código
    //tareas = JSON.parse(localStorage.getItem("misTareas")) || [];
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


// Ejemplo de desestructuración de arrays (esto lo recomiendo solo en casos de conocer la longitud exacta y los elementos no cambian de lugar)
const monedas = [
    {
        pais: "Argentina",
        iso: "ARS",
        simbolo: "$"
    },
    {
        pais: "Estados Unidos de Norteamerica",
        iso: "U$D",
        simbolo: "U$D"
    },
    {
        pais: "España",
        iso: "E",
        simbolo: "E"
    }
]

const [, eeuu] = monedas;
console.log(eeuu);

const {
    simbolo: simboloMonedaEEUU
} = eeuu;
console.log(simboloMonedaEEUU);
