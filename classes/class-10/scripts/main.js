console.log("--> Bienvenidos a la clase 10: Eventos <--");

const saludar = () => {
    alert("Hola mundo")
}

//const boton = document.getElementById("my-button");
// Opción 1: usar el addEventListener
//boton.addEventListener("click", saludar);

// Opción 2: (evaluar si lleva () )
//boton.onclick = saludar;

// Opción 3: no recomendamos usar.
// <input type="button" value="CLICK2" onclick="alert('Respuesta 3');" />

// Manejar eventos con el mouse
const hacerAlgo = (eventoNombre) => {
    console.log("El evento ejecutado es " + eventoNombre)
}

const input = document.getElementById("task-form-description");
// console.log("--> input de nueva tarea", input);

/* input.addEventListener("mousedown", () => hacerAlgo("mousedown"));
input.addEventListener("mouseup", () => hacerAlgo("mouseup"));
input.addEventListener("mousemove", () => hacerAlgo("mousemove"));
input.addEventListener("mouseout", () => hacerAlgo("mouseout"));
input.addEventListener("mouseover", () => hacerAlgo("mouseover"));
input.addEventListener("click", () => hacerAlgo("click")); */

// Manejar eventos con el teclado
/* input.addEventListener("keydown", () => hacerAlgo("keydown"));
input.addEventListener("keyup", () => hacerAlgo("keyup")); */
/* input.addEventListener("change", () => hacerAlgo("change"));
input.addEventListener("input", () => hacerAlgo("input")); */

// Obtener información del evento
/* const form = document.getElementById("task-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Qué es lo que quiero hacer
    console.log(event);
}) */

// Darle un poco de vida al ejemplo (interactuamos con la UI)
// Pasos a conseguir con la interacción:
// 1) Crear una tarea
// 2) Validar algún aspecto del nombre de la tarea
// 3) Corroborar que no existan duplicados
// 4) Intentar listar las tareas en la UI
// 5) Limpiar el fomrualrio

const tareas = [];

const buscarTereaPorNombre = (nombre) => {
    return tareas.find((task) => task.description.toLowerCase() === nombre.trim().toLowerCase());
}

const validarNombreTarea = (nombre = "") => {
    // 1) Que no sea vacía
    if (nombre.trim().length === 0) {
        return "El nombre de la tarea no puede ser vacía."
    }
    // 2) Limitar la cantidad máxima de caracteres - 20
    if (nombre.trim().length > 20) {
        return "El nombre de la trea no puede superar los 20 caracteres."
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
    const nuevaTarea = new Task(tareas.length + 1, nombre, new State(1, "Pendiente"));
    tareas.unshift(nuevaTarea);
    return true;
}

const form = document.getElementById("task-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Para tomar los datos de un formulario, tenemos varias opciones
    // Recueprar el o los inputs individualmente con ".getElementById"
    // acceder a los elementos hijos del formulario a través de una propiedad children
    // utilizar el constructor de la clase FormData()
    const nombreTarea = form.children[0].value;
    if (crearTerea(nombreTarea)) {
        // 4) Intentar listar las tareas en la UI
        console.table(tareas);
        // 5) Limpiar el fomrualrio
        form.reset();
    }
});

// Desafíos:
// Array.prototype.map()    --> Ya lo usamos para convertir objetos literales en objetos con clase.
// Array.prototype.filter() --> Disponible.
// Array.prototype.reduce() --> Ya lo usamos para calcular el total del valor de la factura.
// Array.prototype.find()   --> Disponible
// Array.prototype.some()   --> Disponible
// Array.prototype.sort()   --> Disponible (ojo, método destructivo)
// Array.prototype.reverse()--> Disponible (ojo, método destructivo)
// Array.prototype.forEach()--> Ya lo usamos para mostrar la descripción de la factura y el monto total