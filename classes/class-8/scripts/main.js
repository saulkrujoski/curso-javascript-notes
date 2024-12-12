console.log("--> Bienvenidos a la clase 8: Funciones de Orden Superior II <--");

// Math.min() y Math.max() 
/* console.log(Math.max(55, 13, 0, -25, 93, 400)); // 93
console.log(Math.min(55, 13, 0, -25, 93, 4)); // -25

// Con arrays
const numeros = [55, 13, 0, -25, -93, 40]
console.log(...numeros);
console.log(Math.max(...numeros)); // 93
console.log(Math.min(...numeros)); // -25

// Infinitos
console.log(Math.max(55, Infinity, 0, -25, 93, 4)) // Infinity
console.log(Math.min(55, 13, 0, -Infinity, 93, 4)) // -Infinity */

// Redondeo
/* const pi = Math.PI // 3.141592653589793

// CEIL: devuelve el entero mayor o igual más próximo
console.log(Math.ceil(pi)) // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log(Math.floor(pi)) // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log(Math.round(3.49)) // 3 */

// Raíz cuadrada
/* console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(2).toFixed(2)); // 1.414213562373095
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(-1)); // NaN */

// Random
/* console.log( Math.random() ) // 0.6609867980868442
console.log( Math.random() ) // 0.09291446900104305
console.log( Math.random() ) // 0.6597817047013095 */

// generar rangos
// números entre 0 y 10
/* console.log( Math.random() * 10 )
// números entre 0 y 50
console.log( Math.random() * 50)
// números entre 20 y 50
console.log( Math.random() * 30 + 20 ) */

// generar números aleatorios enteros
/* const generadorNumero = () => {
    const numero = Math.random() * 100;
    console.log("--> Número generado pseudo-aleatorio: ", numero);
    return Math.round(numero);
}

console.log("--> Número redondeado: ",generadorNumero()) */
const miFechaHoy = new Date();
/* console.log({ miFechaHoy });// fecha de ahora

console.log(new Date(2025, 11, 11, 0, 0, 0));// fecha de ahora */

const casiNavidad = new Date(2024, 11, 25, 23, 59, 59);
/* console.log(casiNavidad);
console.log("Año: ", casiNavidad.getFullYear());
console.log("Mes: ", casiNavidad.getMonth());
console.log("Día de la semana: ", casiNavidad.getDay());

console.log(casiNavidad.toDateString()) // Fri Dec 17 2021
console.log(casiNavidad.toLocaleString()) // 17/12/2021 00:00:00
console.log(casiNavidad.toLocaleDateString()) // 17/12/2021
console.log(casiNavidad.toTimeString()) // 00:00:00 GMT-0300 (hora estándar de Argentina)

// Calcular los días de diferencia entre dos fecha
const hoy = new Date("December 17, 2021");
const diferencia = casiNavidad - miFechaHoy;
console.log("La diferencia entre navidad y hoy es de " + diferencia + " segundos.") // 691200000

const milisegundosPorDia = 24 * 60 * 60 * 1000; // (horas * minutos * segundos * milisegundos)

console.log("Faltan " + (diferencia / milisegundosPorDia).toFixed(0) + " días para Navidad.") // 8 */

// Pseudoc-contador
/* const inicio = new Date();

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo");
}

const final = new Date();

console.log("El proceso tardó: " + (final - inicio) + " milisegundos") */
// El proceso tardó: 396 milisegundos


// Ejemplo de manejo de Arrays con Clase y FOS, Math y Date.
class ItemFactura {
    id = "";
    producto = "";
    fechaDeAlta = new Date();
    cantidad = 0;
    precioUnitario = 0;
    porcentajeDescuento = 0;

    constructor(id, nombre, precio, fecha = new Date(), cantidad = 1, pctjDcto = 0) {
        this.id = id;
        this.producto = nombre;
        this.fechaDeAlta = fecha;
        this.cantidad = cantidad;
        this.precioUnitario = precio;
        this.porcentajeDescuento = pctjDcto
    }

    toString() {
        return this.producto
    }

    getMontoDescuento() {
        return this.precioUnitario * this.porcentajeDescuento
    }

    getSubtotal() {
        return (this.precioUnitario * this.cantidad) - this.getMontoDescuento();
    }
}

class Factura {
    id = "";
    cliente = "";
    fechaDeAlta = new Date();
    detalle = [];

    constructor(id, cliente, detalle = [], fecha = new Date()) {
        this.id = id;
        this.cliente = cliente;
        this.detalle = detalle;
        this.fechaDeAlta = fecha;
    }

    toString() {
        return this.id + " - " + this.cliente
    }

    addItem(item) {
        this.detalle.push(item);
    }

    setDetalle(detalle = []) {
        this.detalle = detalle;
    }

    getDetalle() {
        return this.detalle;
    }

    getTotal() {
        const total = this.getDetalle().reduce((acumulado, item) => acumulado = acumulado + item.getSubtotal(), 0);
        return parseFloat(total.toFixed(2));
    }
}

console.table(ventas);

const ventasMapeado = ventas.map((unaVenta) => {
    // Convertimos el objeto literal que representa una venta en un objeto con la clase Factura
    // id, cliente, detalle = [], fecha
    const ventaMapeada = new Factura(unaVenta.id, unaVenta.cliente, [], unaVenta.fechaDeAlta);
    // Tomamos cada uno de los detalles de la venta (que en este punto son objetos literales) y los mapeamos a objetos con la clase ItemFactura
    const detalleMapeado = unaVenta.detalle.map((unItem) => {
        return new ItemFactura(unItem.id, unItem.producto, unItem.precioUnitario, unItem.fechaDeAlta, unItem.cantidad, unItem.porcentajeDescuento);
    })
    // reemplazamos la lista de detalle vacía que pasamos en el constructor de la clase Factura anteriormente, por el nuevo array de detalle con objetos construidos con la clase ItemFactura
    ventaMapeada.setDetalle(detalleMapeado);
    return ventaMapeada;
});

console.log(ventasMapeado);

ventasMapeado.forEach((unaVenta) => {
    console.log(unaVenta.toString(), " $ ",unaVenta.getTotal());
});

// Vamos a avanzar con este ejmeplo en las sigueintes clases, pero te desafío a usar los siguientes métodos de alguna forma con el ejemplo propuesto.

// Array.prototype.map()    --> Ya lo usamos para convertir objetos literales en objetos con clase.
// Array.prototype.filter() --> Disponible.
// Array.prototype.reduce() --> Ya lo usamos para calcular el total del valor de la factura.
// Array.prototype.find()   --> Disponible
// Array.prototype.some()   --> Disponible
// Array.prototype.sort()   --> Disponible (ojo, método destructivo)
// Array.prototype.reverse()--> Disponible (ojo, método destructivo)
// Array.prototype.forEach()--> Ya lo usamos para mostrar la descripción de la factura y el monto total