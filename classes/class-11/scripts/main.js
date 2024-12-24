console.log("--> Bienvenidos a la clase 11: Storage & JSON <--");

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


// Local sorage: métodos para guardar y recuperar infromación
// Las siguientes contantes representan información en mí local y sesion storage.
/* const NUMBER_KEY = "clave";
const STRING_KEY = "nombre";
const BOOLEAN_KEY = "respuesta";
const USER_KEY = "usuario";
const PEOPLE_KEY = "people"; */
// setItem(clave, valor)
/* let clave = parseInt(prompt("Ingrese una clave con números solamente"));
localStorage.setItem(NUMBER_KEY, clave);
clave = null;
clave = localStorage.getItem(NUMBER_KEY);
alert("El valor de " + NUMBER_KEY + " es: " + clave)
console.log(clave);

let nombre = prompt("Ingrese un nombre");
localStorage.setItem(STRING_KEY, nombre);
nombre = null;
nombre = localStorage.getItem(STRING_KEY);
alert("El valor de " + STRING_KEY + " es: " + nombre)
console.log(nombre);

let respuesta = confirm("¿Crees que la tierra es plana?");
localStorage.setItem(BOOLEAN_KEY, respuesta);
respuesta = null;
respuesta = localStorage.getItem(BOOLEAN_KEY);
alert("El valor de " + BOOLEAN_KEY + " es: " + respuesta)
console.log(respuesta);

let usuario = {
    nombre: "Saúl",
    nickname: "ChamanDEV",
    age: 27
};

localStorage.setItem(USER_KEY, usuario);
usuario = null;
usuario = localStorage.getItem(USER_KEY);
alert("El valor de " + USER_KEY + " es: " + usuario)
console.log(usuario);

let personas = [
    {nombre: "Sandra", "nickanme": "LaNinia"},
    {nombre: "pedro", "nickanme": "LaCoste"},
];
localStorage.setItem(PEOPLE_KEY, personas);
personas = null;
personas = localStorage.getItem(PEOPLE_KEY);
alert("El valor de " + PEOPLE_KEY + " es: " + personas)
console.log(personas); */

// getItem(clave)
/* let clave = parseInt(prompt("Ingrese una clave con números solamente"));
sessionStorage.setItem(NUMBER_KEY, clave);
clave = null;
clave = sessionStorage.getItem(NUMBER_KEY);
alert("El valor de " + NUMBER_KEY + " es: " + clave)
console.log(clave);

let nombre = prompt("Ingrese un nombre");
sessionStorage.setItem(STRING_KEY, nombre);
nombre = null;
nombre = sessionStorage.getItem(STRING_KEY);
alert("El valor de " + STRING_KEY + " es: " + nombre)
console.log(nombre);

let respuesta = confirm("¿Crees que la tierra es plana?");
sessionStorage.setItem(BOOLEAN_KEY, respuesta);
respuesta = null;
respuesta = sessionStorage.getItem(BOOLEAN_KEY);
alert("El valor de " + BOOLEAN_KEY + " es: " + respuesta)
console.log(respuesta);

let usuario = {
    nombre: "Saúl",
    nickname: "ChamanDEV",
    age: 27
};

sessionStorage.setItem(USER_KEY, usuario);
usuario = null;
usuario = sessionStorage.getItem(USER_KEY);
alert("El valor de " + USER_KEY + " es: " + usuario)
console.log(usuario);

let personas = [
    {nombre: "Sandra"},
    {nombre: "pedro"},
];
sessionStorage.setItem(PEOPLE_KEY, personas);
personas = null;
personas = sessionStorage.getItem(PEOPLE_KEY);
alert("El valor de " + PEOPLE_KEY + " es: " + personas)
console.log(personas); */

// Recuperar, ver y/o buscar infromación dentro de los storage con un ciclo para recorrer las claves almacenadas en el objeto localStorage
/* console.log("Recuperamos información del local storage"); */

/* for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
    console.log("------------------------------------");
    
}

console.log("Recuperamos información del session storage");
for (let i = 0; i < sessionStorage.length; i++) {
    let clave = sessionStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
    console.log("------------------------------------");
} */

// veremos como eliminar información del storage
// Eliminar una clave cocnreta
/* localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido'); */

// Limpiar todo el storage completo
//localStorage.clear()    //elimina toda la información
//sessionStorage.clear() //elimina toda la información


// Guardar y recuperar infromación en formato de objeto dentro de lso storage

// Converir un objeto en un string
/* const unaPersona = {
    nombre: "Saúl",
    apodo: "chamanDEV",
    fechaDeUltimoIngreso: new Date()
}

localStorage.setItem("unaPersona", JSON.stringify(unaPersona));
const restoredData = JSON.parse(localStorage.getItem("unaPersona"))
console.log("Recuperamos la información", restoredData); */


// Recuperar infroamción del syorage en formato de texto y convertirlo en objeto

/*Definir y crear un objeto con las propiedades: cliente (solo nombres y apellidos),
número de cuenta, saldo, fecha de creación y habilitado.*/
class CuentaBancaria {
    cliente = "";//cliente (solo nombres y apellidos)
    #numero = "";// número de cuenta
    saldo = 0;// saldo
    fechaCreacion = new Date();// fecha de creación
    habilitado = true;// habilitado
    movimientos = [];// Movimientos de saldos en la cuenta

    constructor(clienteNombre, numero, saldo) {
        this.cliente = clienteNombre;
        this.numero = numero;
        this.saldo = saldo;
        this.fechaCreacion = new Date();
        this.habilitado = true;
        this.movimientos = [];// Va a ser de tipo Movimiento
    }

    // Ejemplos de Getters y Setters para modificar y/o acceder a datos de dentro del objeto
    getNumero() {
        return this.numero
    }

    setNumero(numero) {
        this.numero = numero;
    }

    toString() {
        return this.numero + "($ " + this.saldo.toFixed(2) + ")";
    }

    equals(entity) {
        // entity --> es una cuenta bancaria
        if (!entity) { return false; }
        return this.numero === entity.numero && this.cliente === entity.cliente;
    }

    compareAmount(amount) {
        return this.saldo === amount;
    }

    getMovimientos() {
        return this.movimientos;
    }

    addMovement(movement) {
        if (!movement) { return false }
        // Comprobamos si el saldo es un egreso, si podemos descontar este monto del saldo
        if (movement.monto < 0 && this.saldo < (movement.monto * -1)) {
            return false;
        }
        this.movimientos.push(movement);
        if (movement.monto >= 0) {
            this.saldo = this.saldo + movement.monto;
        } else {
            this.saldo = this.saldo - (movement.monto * -1);
        }
        return true;
    }
}


/* fecha, hora, monto
(positivo o negativo), descripción, cliente relacionado. */
class Movimiento {
    numeroCuentaCliente = "";// Representa a el individuo o empresa al que está relacionado el movimiento
    fechaHora = new Date();
    descripcion = "";
    monto = 0;
    tipo = "";

    constructor(numero, descripcion, monto) {
        this.numeroCuentaCliente = numero;
        this.fechaHora = new Date();
        this.descripcion = descripcion;
        this.monto = monto;
        if (monto >= 0) {
            this.tipo = "INGRESO";
        } else {
            this.tipo = "EGRESO";
        }
    }
}


// Creación de objetos
const cuenta1 = new CuentaBancaria("Chaman", "10000", parseFloat("30000"));
cuenta1.addMovement(new Movimiento("20019", "Compra en MELI de medias", parseFloat("-1200")));
cuenta1.addMovement(new Movimiento("20021", "Pago de servicios de coperativa", parseFloat("-13000")));
cuenta1.addMovement(new Movimiento("10000", "Ingreso de efectivo por caja", parseFloat("20000")));
cuenta1.addMovement(new Movimiento("10000", "Egreso de cuneta por moratoria de la DGR", parseFloat("-40000")));

const cuenta2 = new CuentaBancaria("Sandra", "10001", parseFloat("5000"));
// vemos los datos internos de cada objeto
let cuentas = [];
cuentas.push(cuenta1);
cuentas.push(cuenta2)
console.table(cuentas);
localStorage.setItem("cuentas", JSON.stringify(cuentas));

// Cremos un movimiento nuevo detro de la cuenta 1
/* const numeroCuenta = prompt("Número de cuenta de la TRF");
const detalle = prompt("Detalle de la TRF");
const monto = parseFloat(prompt("Monto de la operación"))

cuenta1.addMovement(new Movimiento(numeroCuenta, detalle, monto));
cuentas = [];
cuentas.push(cuenta1);
cuentas.push(cuenta2);
localStorage.setItem("cuentas", JSON.stringify(cuentas)); */


// Recuperamos la información de las cuentas y sus movimientos y vemos la diferencia entre un objeto literal y un objeto con "Clase";

const cuentasRestoredStringFormat = localStorage.getItem("cuentas");
console.log("--> cuentasRestoredStringFormat", cuentasRestoredStringFormat);

const cuentasRestoredArrayObjectFormat = JSON.parse(cuentasRestoredStringFormat);
console.log("--> cuentasRestoredArrayObjectFormat", cuentasRestoredArrayObjectFormat);

cuentasRestoredArrayObjectFormat.forEach(unaCuenta => {
    console.log("--> Detalle del array con formato de objetos literales: " + unaCuenta.toString());

});

const cuentasRestoreArrayCuentasformat = cuentasRestoredArrayObjectFormat.map((item) => {
    return new CuentaBancaria(item.cliente, item.numero, parseFloat(item.saldo));
})

console.log("--> cuentasRestoreArrayCuentasformat", cuentasRestoreArrayCuentasformat);


cuentasRestoreArrayCuentasformat.forEach(unaCuenta => {
    console.log("--> Detalle del array con formato específico: " + unaCuenta.toString());

});