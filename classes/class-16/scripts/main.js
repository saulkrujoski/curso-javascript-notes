console.log("--> Bienvenidos a la clase 15: Asincronía y promesas <--");
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

const showDetails = (id) => {
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

// AJAX y FETCH
// Ejemplo 1: de cómo veremos el resultado que arroja un fetch sin usar un .then() o .catch()
// Aquí veremos la promesa, con su estado y su resultado mascarado (no podemos leer la información de resultado de la consulta)
/* console.log( fetch('https://jsonplaceholder.typicode.com/posts') ) */

// Ejemplo 2: Método GET para recuperar información
// Sabemos que es un método GET porque es el valor predeterminado (default) para el método fetch
const postsContent = document.getElementById("posts-result")

/* fetch('https://jsonplaceholder.typicode.com/posts')
    // esperamos la respuesta del servidor y la capturamos con este primer then()
    .then((response) => response.json())
    // Luego, ya que la información está mascarada dentro del response y a este nivel solo podemos leer metadatos (header, status, mensajes, etc)
    // Debemos esperar la respuesta del response.json() con un segundo .then()
    .then((data) => {
        // Ahora si contamos con la información específica devuelta por el servicio y podemos manipularla a nuestro antojo
        console.log("--> Datos decodificados", data)
        // Como la respuesta es un array, lo iteramos y mostramos su contenido en el DOM de forma dinámica
        data.forEach((post) => {
            let record = document.createElement("div");
            record.innerHTML = `
                <h5>${post.title}</h5>
                <p>${post.body}</p>
            `;
            postsContent.append(record);
        })
    }) */


// Ejemplo 3: Método POST para envíar información
// En los casos donde necesitamos envíar información, usaremos el segundo parámetro del método fetch para definir algunos atributos, como ser el método de solicitud, el body con los datos formateados con json, headers y otros 
/* fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Hoy vemos temas nuevos',
        body: 'estamos probando crear registros con el método POST',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((data) => console.log("--> Información devuelta por el servidor",data)) */

// Ejemplo 4: consumir rutas relativas (rutas dentro de nuestro propio proyecto)
// Útil para consumir información contenida en nuestros propios archivos
/* fetch('/mocks/products.json')
    .then((res) => res.json())
    .catch((error) => {
        console.log("--> error leyendo archivo local", error);
    })
    .then((data) => {
        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `
            postsContent.append(li)
        })
    }) */

// Ejemplo 5: Esperar por la respuesta de un servicio, útil si necesitamos de esa información en otras partes del sistema y debemos esperar a obtener el resultado del servidor antes de continuar con la ejecución del programa.

const renderPosts = (posts = []) => {
    posts.forEach((post) => {
        const user = Object.assign({}, post.user);
        let record = document.createElement("div");
        record.innerHTML = `
                <h5>${post.title}</h5>
                <p>${post.body}</p>
                <p><strong>Usuario: </strong>${user ? user.name : "Anónimo"}</p>
            `;
        postsContent.append(record);
    })
}

/* const pedirPosts = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await respuesta.json();
    renderPosts(data);
} */


// Ejemplo 6: de cómo complementar información faltante de un conjunto de datos con otros provistos por un servicio externo. En este caso sumaremos datos del usuario creador del posteo con una llamada complementaria con el ID de usuario a un servicio externo
let allPosts = [];
let allUsers = [];

// Funciones para cargar los posts y los usuarios relacionados
const getPost = async () => {
    try {
        // Obtener todos los posts
        const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
        allPosts = await responsePosts.json();
    } catch (error) {
        console.error('Error al recuperar posts:', error);
    }
}

const getUsers = async (posts = []) => {
    try {
        // Método 1: aplicando con el conocimiento que tenemos para obtener cada uno de los IDs de usuarios sin repetirlos
        const identificadores = posts.reduce(
            (keys, post) => (!keys.includes(post.userId) ? [...keys, post.userId] : keys),
            []
        );
        console.table("--> Users IDs con método 1", identificadores);

        // Método 2: aplicando con un set de datos para obtener cada uno de los IDs de usuarios sin repetirlos
        const usersId = [...new Set(posts.map((post) => post.userId))];
        console.table("--> Users IDs con método 2", usersId);

        // Obtener los datos de usuarios relacionados con los userId únicos recuperados de los posts originales y cargarle información del usuario a estos
        for (const userId of usersId) {
            let findedUser = allUsers.find((user) => user.id === userId);
            // Si no existe su información, lo recuperamos
            if (!findedUser) {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const user = await response.json();
                allUsers.push(user);
            }
        }
    } catch (error) {
        console.error('Error al recuperar datos de usaurio:', error);
    }
}

const setUserInformationInPosts = async (posts = [], users = []) => {
    // Asignar el usuario correspondiente a cada post
    allPosts = posts.map((post) => {
        return { ...post, user: users.find((u) => u.id === post.userId) };
    });

    // Eliminar userId de los posts (opcional, si no lo necesitas ya que contamos con el objeto completo)
    allPosts.forEach((post) => delete post.userId);
}

// Ejecutamos los métodos necesarios al cargar el sitio por completo
document.addEventListener("DOMContentLoaded", async () => {
    //pedirPosts();
    await getPost();
    renderPosts(allPosts);
    await getUsers(allPosts);
    setUserInformationInPosts(allPosts, allUsers);
    debugger
    renderPosts(allPosts);
    // Acá podemos aprovechar la información recuperada por el servicio
})