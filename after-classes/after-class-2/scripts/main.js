console.log("--> Bienvenidos al After Class 2 <--");

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
        this.sfechaHora = new Date();
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
const cuentas =[];
cuentas.push(cuenta1);
cuentas.push(cuenta2)
console.table(cuentas);

// Vamos a comparar las cuentas
// Estamos aplicando el uso de métodos (funciones definidas dentro de clases u objetos literales)
/* if (cuenta1.equals(cuenta2)) {
    console.log("Las cuentas son igual");
} else {
    console.log("Las cuentas NO son igual");
} */

// Comaramos saldos
console.log(cuenta2.compareAmount(cuenta1.saldo));// false
console.log(cuenta2.compareAmount(8000));// false
console.log(cuenta2.compareAmount(5000));// true