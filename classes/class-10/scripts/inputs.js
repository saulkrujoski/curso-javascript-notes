console.log("--> Bienvenidos a la clase 10: Eventos - Ejemplos <--");

// Aplicación de getElementById
const form = document.getElementById("my-examples-form");
console.log("--> Formulario", form);
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    ev.target.elements.forEach((input) => {
        console.log(input.id. input.value);
        
    });
    
});

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
/* const formElements = document.querySelectorAll('input, select, textarea, button');
console.log("--> Inputs del formulario", formElements);

formElements.forEach((input) => {
    console.log("--> Elemento " + input.getAttribute("id"), input);
    input.addEventListener("change", (ev) => {
        console.log("--> Cambiaste el contenido de " + ev.target.id, {
            value: ev.target.value,
            checked: ev.target.checked
        });

    })
}) */