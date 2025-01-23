/* Propuesta de cómo podemos mejorar el manejo de storage con uso de funciones, y valores para las keys paramétriados y gestionados desde un único archivo, para facilitar el mantenimiento y la adaptación a cambios */

const setLocalStorageClave = (value) => {
    localStorage.setItem(NUMBER_KEY, value);
}

const getLocalStorageClave = () => {
    return localStorage.getItem(NUMBER_KEY);
}

const setLocalStorageNombre = (value) => {
    localStorage.setItem(STRING_KEY, value);
}

const getLocalStorageNombre = () => {
    return localStorage.getItem(STRING_KEY);
}

const setLocalStorageRespuesta = (value) => {
    localStorage.setItem(BOOLEAN_KEY, value);
}

const getLocalStorageRespuesta = () => {
    return localStorage.getItem(BOOLEAN_KEY);
}

const setLocalStorageUsuario = (value) => {
    localStorage.setItem(USER_KEY, value);
}

const getLocalStorageUsuario = () => {
    return localStorage.getItem(USER_KEY);
}

const setLocalStoragePeople = (value) => {
    localStorage.setItem(PEOPLE_KEY, value);
}

const getLocalStoragePeople = () => {
    return localStorage.getItem(PEOPLE_KEY);
}