console.log("--> Eventos - Ejemplos de cómo recuperar datos de un formualrio y el formato en el que se expresan <--");

// Aplicación de getElementById para recorrer todos y cada uno de los elementos del formulario y ver los datos cargados
/* const form = document.getElementById("my-examples-form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.log("--> Formulario", { form: ev.target });
    for (let index = 0; index < ev.target.children.length; index++) {
        const child = ev.target[index];
        console.log(child.id, {
            value: child.value,
            checked: child.checked
        });
    }

}); */

// Podemos acceder a cada elemento individualmente
/* const textInput = document.getElementById("exampleInputText");
console.log("--> Text input", textInput);

const passwordInput = document.getElementById("exampleInputPassword");
console.log("--> Password input", passwordInput);

const dateInput = document.getElementById("exampleInputDate");
console.log("--> Date input", dateInput);

const countryInput = document.getElementById("exampleInputCountry");
console.log("--> Country input", countryInput);

const skillOneInput = document.getElementById("exampleCheckSkillOne");
console.log("--> Skill One input", skillOneInput);

const spectTreeInput = document.getElementById("exampleCheckAspectsGroupTree");
console.log("--> Aspect Tree input", spectTreeInput); */

// Aplicación de querySelectorAll
// Construiremos un proceso que añada una captura del cambio en los datos proporcionados, a todos los inputs del formualrio
const formElements = document.querySelectorAll('input, select, textarea, button');

formElements.forEach((input) => {
    input.addEventListener("change", (ev) => {
        console.log("--> Cambiaste el contenido de " + ev.target.id, {
            value: ev.target.value,
            checked: ev.target.checked
        });

    })
})