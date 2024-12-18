const form = document.getElementById("myForm");

// Ejemplos de cómo podemos recuperar información de un formulario con pocas líneas de código

const recoverFieldsMethodOne = (formData) => {
    // Este método permite recuperar todos los campos de un formulario sencillo, no procesa adecuadamente set de datos en conjunto como por ejemplo opcione smultiples en un combo o en cajas de verificación como los checkboxes
    return Object.fromEntries(formData.entries());

    /*
    Explicación del código:
    1) new FormData(formulario): Crea una instancia de FormData que contiene todos los datos del formulario.
    2) datosFormulario.entries(): Obtiene un iterador con pares clave-valor de los datos del formulario.
    3) Object.fromEntries(): Convierte estos pares clave-valor en un objeto plano.
    
    Ventajas:
    - Conciso: Solo se necesitan unas pocas líneas.
    - Compatibilidad: Funciona con todos los tipos de campos (texto, radio, checkbox, select, etc.).
    - Flexible: El objeto resultante datos contiene todas las entradas del formulario, que se pueden manipular fácilmente en JavaScript.
    
    Este enfoque es ideal para manejar formularios en JavaScript de manera rápida y eficiente.
    */
}

const recoverFieldsMethodTwo = (formData) => {
    // Método mejorado donde podemos procesar uno a uno los campos y agrupar aquellos que debamos agrupar, como en el caso de casillas de verificación (checkboxes) y combos de selección multiple (select).
    const datos = {};
    for (let [key, value] of formData.entries()) {
        // Si el nombre ya existe en el objeto, lo convertimos en array y agregamos el valor
        if (datos[key]) {
            // Aseguramos que sea un array para almacenar múltiples valores
            datos[key] = Array.isArray(datos[key]) ? datos[key] : [datos[key]];
            datos[key].push(value);
        } else {
            datos[key] = value;
        }
    }
    return datos;

    /*
    Explicación del Código:
    1) for (let [key, value] of datosFormulario.entries()): Itera sobre cada entrada de FormData.
    2) Condicional para chequear si key ya existe: Si la clave (key) ya está en el objeto datos, significa que es un input con el mismo nombre.
    3) Conversión a array: Si es el primer valor repetido, convierte datos[key] a un array y luego añade el nuevo valor con push().
    4) Asignación directa: Si el campo no existía en datos, simplemente se asigna su valor.
    
    Resultado:
    El objeto datos contendrá:
    1) Claves únicas con un solo valor para campos normales.
    2) Claves con arrays para inputs con posibilidad de valores multiples del mismo nombre, donde cada elemento del array es una opción seleccionada.
    */
}

const recoverFieldsMethodTree = (formData ) => {
    // Método alternativo para procesar uno a uno los campos y agrupar aquellos que debamos agrupar.
    const datos = Array.from(formData.entries()).reduce((acc, [key, value]) => {
        // Si la clave ya existe, aseguramos que sea un array y agregamos el valor
        if (acc[key]) {
            acc[key] = Array.isArray(acc[key]) ? acc[key] : [acc[key]];
            acc[key].push(value);
        } else {
            acc[key] = value;
        }
        return acc;
    }, {});
    return datos;
    /* 
    Explicación del código:
    1) Array.from(datosFormulario.entries()): Convierte el FormData en un array de pares clave-valor.
    2) reduce: Recorre estos pares para crear un objeto en el que, si una clave aparece más de una vez (como en el caso de los inputs con posibilidad de valores multiples), se almacena en un array.
    3) Condicional para arrays: Si la clave ya existe en el objeto acumulador acc, la convierte en un array (si no lo es ya) y le agrega el nuevo valor.
    4) Asignación directa: Si la clave no existía, la agrega con su valor único.
    
    
    Resultado:
    Este enfoque combina la conveniencia de FormData con un manejo adecuado de inputs con posibilidad de valores multiples. El objeto datos contendrá:

    Claves únicas con un valor para los campos normales.
    Claves con arrays para inputs con posibilidad de valores multiples con el mismo nombre, con cada opción seleccionada almacenada en el array.
    */
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    console.log("--> Resultado del método 1", recoverFieldsMethodOne(formData));
    console.log("--> Resultado del método 2", recoverFieldsMethodTwo(formData));
    console.log("--> Resultado del método 3", recoverFieldsMethodTree(formData));
});