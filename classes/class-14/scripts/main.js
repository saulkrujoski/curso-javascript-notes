console.log("--> Bienvenidos a la clase 12: Operadores avanzados <--");
const DateTime = luxon.DateTime
let tareas = [];
let states = STATES_FROM_CONSTANT.map((state) => {
    return new State(state.id, state.name, state.textColorClass, state.bgColorClass, state.key);
})
let ultimaTarea = null;
const DEFAULT_STATE = new State(1, "Pendiente");
const LENGGTH_LIMIT = 60;

/**
 * @abstract Definición de qué hace está funcionalidad
 * @param {*} task Aquí ingresa el objeto Una tarea con el formato de un ibjeto lietral
 * @returns Devuelve un objeto con las propiedades recibidas originalmente pero con el protoripo de clase Task
 * 
 */
const mapObjectToClass = ({ id, description, state: { id: stateId, name: stateName, textColorClass, bgColorClass, key: stateKey, }, date } = null) => {
    if (!id) { return null }
    return new Task(id, description, new State(stateId, stateName, textColorClass, bgColorClass, stateKey), new Date(date));
}
/**
 * @abstract Esta funcionalidad recupera los datos de storage del cliente y lo convierte en un array de alcance global
 */
const recuperarDelStorage = () => {
    ultimaTarea = mapObjectToClass(JSON.parse(localStorage.getItem("ultimaTarea")));
    const misTareasRecuperadas = JSON.parse(localStorage.getItem("misTareas")) || [];
    tareas = [];
    misTareasRecuperadas.forEach((entity) => {
        const restored = mapObjectToClass(entity);
        tareas.push(restored);
    });
}

// Evaluamos si existe la lista persistida y la cargamos a la memoria.
// La primera vez que lo ejecutes sin tener nada persistido va a explotar, porque los objetos asociados a las claves son nulos, te invito a programar un salvaguardas.
recuperarDelStorage();

// START Renderizado en UI
/**
 * @abstract Crea un componente visual con formato de lista desplegable con los estados posibles que puede tomar una tarea
 * @param {*} label Nombre con que se mostrará en la pantalla
 * @param {*} key Clave única para identificar al nodo/etiqueta en el DOM/código
 * @param {*} states Lista de estados que definimos para las tareas.
 * @param {*} exclude Estado excluido por ser el establecido en la tarea y no puede ser seleccionado
 * @param {*} entity Tarea a la que hace referencia este listado de estados alternativos
 * @returns Código HTML que representa a una etiqueta select con todas las opciones de estados posibles para la tarea 
 */
const generateStateListHTML = (label, key, states = [], exclude = null, entity) => {
    return `<div class="btn-group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    ${label}
                </button>
                <ul class="dropdown-menu" id="dropdown-${key}" name="dropdown-${key}">
                    ${states.map((s) => `<li id="${key}-${s.key}" name="${key}-${s.key}"  onclick="changeStateToTask(${entity.id}, ${s.id},${exclude ? exclude.id === s.id : false})"><a class="dropdown-item${exclude ? exclude.id === s.id ? " disabled" : "" : ""}" href="#">${s.name}</a></li>`).join("")}
                </ul>
            </div>`;
}

/**
 * @abstract Crea la estructura de tabla HTML que muestra todas y cada una de las tareas que necesitamos en la interfaz de usuario, con información pertinente a estas.
 * @param {*} entities Listado de tareas
 * @param {*} states Listado de estados
 */
const renderTasksList = (entities = [], states = []) => {
    let bodyList = document.getElementById("main-content");
    bodyList.innerHTML = "";
    if (entities.length) {
        entities.forEach((entity) => {
            let record = document.createElement("div");
            record.setAttribute("class", "alert alert-secondary");
            record.setAttribute("id", entity.id.toString());
            record.setAttribute("role", "alert");
            record.innerHTML = `
            <h5 class="alert-heading">${entity.toString()}</h5>
            <div class="row">
                <div class="col-sm-9">
                    <p class="mb-0">${entity.getFormattedDate()} <span class="badge rounded-pill bg-${entity.state.bgColorClass} p-2 border border-light rounded-circle"> </span></p>
                </div>
                <div class="col-sm-3 d-flex justify-content-end">
                    ${generateStateListHTML("Change state", entity.id, states, entity.state, entity)}
                    <button type="button" class="btn btn-secondary" onclick="deleteTask(${entity.id})" style="margin-left: 5px"><i class="bi bi-trash-fill"></i></button>
                    <button type="button" class="btn btn-primary" onclick="showDetails(${entity.id})" style="margin-left: 5px">Ver</button>
                </div>
            </div>
            `;
            bodyList.append(record);
        });
    } else {
        let record = document.createElement("div");
        record.setAttribute("class", "alert alert-warning");
        record.setAttribute("role", "alert");
        let message = "There are no tasks to show yet.";
        if (filteredTasks.length === 0 && (selectedState || keywordsSelected.length)) {
            message = "There are no tasks to display yet based on the applied filters.";
        }
        record.innerHTML = `<h5 class="alert-heading">${message}</h5>`;
        bodyList.append(record);
    }
}

renderTasksList(tareas, states);

// END Renderizado en UI

// START Search functions
const buscarTereaPorNombre = (nombre) => {
    return tareas.find((task) => task.description.toLowerCase() === nombre.trim().toLowerCase());
}

const buscarTereaPorId = (id) => {
    return tareas.find((task) => task.id === id);
}
// END Search functions

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
        Toastify({
            text: "Tarea agregada correctamente",
            duration: 3 * 1000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {
                console.log("No me toques!");
            } // Callback after click
        }).showToast();
        renderTasksList(tareas, states);
        // 5) Limpiar el fomrualrio
        form.reset();
    }
});




document.addEventListener("DOMContentLoaded", () => {
    /* Swal.fire({
        title: 'Bienvenido',
        text: 'Ya puedes trabajar con el sitio',
        icon: 'success',
        confirmButtonText: 'Yeiii!'
    }) */
    /* const dt = DateTime.local(2025, 1, 15, 22, 5);
    console.log(dt.toString());
    console.log(DateTime.fromISO("2025-05-15")); */
    /* miCumple = DateTime.fromISO("2025-05-27T05:30:00"); */
    /* console.log(miCumple.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY));

    const now = DateTime.now();
    console.log(now.toString()); */

    /* const miCumpleIncrementado = miCumple.plus({ hours: 15 })
    console.log(miCumpleIncrementado.toLocaleString(DateTime.DATETIME_SHORT))

    const miCumpleDecrementado = miCumple.minus({ days: 10 })
    console.log(miCumpleDecrementado.toLocaleString(DateTime.DATETIME_SHORT)) */

})

const showDetails = (id) => {
    debugger
    const entity = buscarTereaPorId(id);
    if (entity) {
        Swal.fire({
            title: 'Detalle de la tarea',
            confirmButtonText: 'Ocultar',
            html: `
                <p>${entity.toString()}</p>
                <div>
                    <p>Algo mas...</p>
                </div>
            `,
        })
    }
}

const filterTasks = (value = "") => {
    return tareas.filter((task) => task.description.toLowerCase().includes(value.toLowerCase()));
}

const filterForm = document.getElementById("filter-tasks-form");
filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("filter-tasks-form-term");
    const termino = input.value;
    const filteredTasks = filterTasks(termino);
    renderTasksList(filteredTasks);
});