/**
 * Ejemplo 13: Imaginar que debemos programar placas controladoras para electrodomésticos con la capacidad de eficientizar consumos de electricidad, en este ejemplo intentaremos mejorar el mantenimiento de alimentos frescos dentro de un refrigerador, para ello sabemos que si la temperatura medida del interior supera los 8°C, el compresor debe activarse; si se encuentra entre 2°C y 8°C, se mantiene a baja capacidad; y de lo contrario si baja de 2°C, debe apagarse.
 */

const currentTemperature = parseFloat(prompt("Temperatura del interior del refrigerador"));
const averageCapacity = 8;
const off = 2;

if (currentTemperature > averageCapacity) {
    alert("ENCENDER compresor a máxima capacidad.");
} else if (currentTemperature > off) {
    alert("MANTENER compresor a capacidad regular.");
} else {
    alert("APAGAR compresor");
}
