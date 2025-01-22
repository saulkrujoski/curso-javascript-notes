// Ejemplo 1: Notificación de sistema
document.getElementById("btn-example-1").addEventListener("click", () => {
    console.log('--> Ejecutar ejemplo "Notificación".');
    const body = document.getElementById("notification");
    body.classList.remove("visually-hidden");

    setTimeout(() => {
        // Ocultamos la notificación
        body.classList.add("visually-hidden");
    }, 3 * 1000);
});

// Ejemplo 2: Inactividad en un sistema
let inactivityTimeout;

const logoutUser = () => {
    console.log('--> Ejecutar ejemplo "Sesión cerrada".');
    const body = document.getElementById("session");
    body.classList.remove("visually-hidden");
    // Aquí estamos simulándolo, pero la realidad es que podríamos mostrar un mensaje de alerta y redirigirlo al inicio del sitio y eliminar sus datos de sesión de la sessionStorage.
    /* alert("Sesión cerrada por inactividad.");
    sessionStorage.removeItem("session-data");
    window.location.href = "/"; */
}

const resetTimeout = () => {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(logoutUser, 10 * 1000); // 10 segundos de inactividad.
}

// Agregamos eventos al comportamiento regular de usuarios sobre el sitio en su totalidad.
document.addEventListener("mousemove", resetTimeout);
document.addEventListener("keypress", resetTimeout);

// Ya que requiere de una primera interacción para el primer reset (dando inicio al proceso), lo que hacemos es ejecutarlo al cargar el DOM para evitar que esperes a que ocurra algo.
document.addEventListener("DOMContentLoaded", resetTimeout);

document.getElementById("btn-example-2").addEventListener("click", () => {
    console.log('--> Reiniciando ejemplo "Sesión cerrada".');
    const body = document.getElementById("session");
    body.classList.add("visually-hidden");
});

// Ejemplo 3: Cargando
document.getElementById("btn-example-3").addEventListener("click", () => {
    console.log('--> Ejecutar ejemplo "Cargando".');
    const spinner = document.getElementById("spinner");
    const data = document.getElementById("datos-recuperados");
    spinner.classList.remove("visually-hidden");
    data.classList.add("visually-hidden");

    setTimeout(() => {
        const datos = [
            { id: 1000, name: "Lorem ipsum dolor sit amet" },
            { id: 2000, name: "Aenean maximus placerat facilisis. Phasellus." },
            { id: 3000, name: "Pellentesque bibendum ornare metus et." },
        ]
        // Ocultamos el spinner y mostramos los datos recuperados
        spinner.classList.add("visually-hidden");
        data.classList.remove("visually-hidden");
        data.innerHTML = "";
        data.classList.remove("text-center");
        data.classList.add("ps-2");
        datos.forEach((record) => {
            const fila = document.createElement("p");
            fila.innerHTML = `<p><strong>${record.id}</strong> - ${record.name}</p>`;
            data.append(fila);
        });
    }, 3 * 1000);
});

// Ejemplo 4: Cancelar compra
const LIMIT_TIME = 10;
let cancelPurchaseCount = 0;
let cancelPurchaseInterval;

const progressbarPurchase = document.getElementById("progressbarPurchase");
const purchaseTime = document.getElementById("purchaseTime");

const renderPurchaseBody = (message = "") => {
    const purchaseBody = document.getElementById("purchaseBody");
    purchaseBody.innerHTML = `<p>${message}</p>`;
}

const togglePurchaseFooter = (status = true) => {
    const purchaseFooter = document.getElementById("purchaseFooter");
    if (status) {
        purchaseFooter.classList.remove("visually-hidden");
    } else {
        purchaseFooter.classList.add("visually-hidden");
    }
}

const togglePurchaseProgresbar = (status = true) => {
    const purchaseProgress = document.getElementById("purchaseProgress");
    if (status) {
        cancelPurchaseCount = 0;
        purchaseProgress.classList.remove("visually-hidden");
        progressbarPurchase.setAttribute("aria-valuenow", cancelPurchaseCount.toString());
        progressbarPurchase.children[0].classList.remove("bg-warning");
        progressbarPurchase.children[0].classList.remove("bg-danger");
        progressbarPurchase.children[0].style.width = cancelPurchaseCount.toString().concat("%");
        purchaseTime.innerText = (LIMIT_TIME).toString();
    } else {
        purchaseProgress.classList.add("visually-hidden");
    }
}

const togglePurchaseConfirm = (status = true) => {
    const purchaseConfirm = document.getElementById("purchaseConfirm");
    if (status) {
        purchaseConfirm.classList.remove("visually-hidden");
    } else {
        purchaseConfirm.classList.add("visually-hidden");
    }
}

const togglePurchaseCancel = (status = true) => {
    const purchaseCancel = document.getElementById("purchaseCancel");
    if (status) {
        purchaseCancel.classList.remove("visually-hidden");
    } else {
        purchaseCancel.classList.add("visually-hidden");
    }
}

const confirmarCompra = () => {
    clearInterval(cancelPurchaseInterval);
    togglePurchaseProgresbar(false);
    togglePurchaseFooter(false);
    togglePurchaseConfirm();
}

const cancelarCompra = () => {
    clearInterval(cancelPurchaseInterval);
    togglePurchaseProgresbar(false);
    togglePurchaseFooter(false);
    togglePurchaseCancel();
}

document.getElementById("btn-example-4").addEventListener("click", () => {
    console.log('--> Ejecutar ejemplo "Cancelar compra".');
    // Reiniciamos todos los parámetros iniciales
    // Ocultándo todos los elementos que no debemos mostrar
    // Habilitando la barra de progreso y las opciones del footer
    // Reiniciando el contador de segundos a 0
    togglePurchaseProgresbar();
    togglePurchaseFooter();
    togglePurchaseConfirm(false);
    togglePurchaseCancel(false);

    cancelPurchaseInterval = setInterval(() => {
        cancelPurchaseCount++;
        // Calculamos el porcentaje de progreso y lo establecemos en los atributos del nodo que corresponde con la barra de progreso
        const percent = (cancelPurchaseCount * 100) / LIMIT_TIME;
        if (percent > 70) {
            progressbarPurchase.children[0].classList.remove("bg-warning");
            progressbarPurchase.children[0].classList.add("bg-danger");
        } else if (percent > 50) {
            progressbarPurchase.children[0].classList.add("bg-warning");
        }
        progressbarPurchase.setAttribute("aria-valuenow", percent.toString());
        progressbarPurchase.children[0].style.width = percent.toString().concat("%");
        purchaseTime.innerText = (LIMIT_TIME - cancelPurchaseCount).toString();
        if (cancelPurchaseCount >= LIMIT_TIME) {
            // Si el tiempo para cancelar la compra a cocnluido, procedemos a confirmar definitivamente la compra
            confirmarCompra();
        }
        console.log("--> Pasaron " + cancelPurchaseCount.toString() + " segundos para cancelar la compra.");
    }, 1 * 1000);
});

document.getElementById("confirmPurchase").addEventListener("click", () => {
    console.log("--> Confirmar compra <--");
    confirmarCompra();
});

document.getElementById("cancelPurchase").addEventListener("click", () => {
    console.log("--> Cancelar compra <--");
    cancelarCompra();
});

document.getElementById("closePurchase").addEventListener("click", () => {
    console.log("--> Cancelar compra <--");
    cancelarCompra();
});

// Ejemplo 5: Reloj en tiempo real
document.getElementById("btn-example-5").addEventListener("click", () => {
    console.log('--> Ejecutar ejemplo "Reloj en tiempo real".');
    setInterval(() => {
        const now = new Date();
        document.getElementById("realTime").textContent = now.toLocaleTimeString();
    }, 1 * 1000); // Actualizar cada segundo.
});

// Ejemplo 6: Comprobación de mensajes
const messages = document.getElementById("messages");
const LIMIT_MESSAGES_GENERATED = 5;
let messagesCount = 0;
let messagesTimeout;

document.getElementById("btn-example-6").addEventListener("click", () => {
    console.log('--> Ejecutar ejemplo "Comprobación de mensajes".');

    messagesTimeout = setInterval(() => {
        messagesCount++;
        const mssgs = document.createElement("div");
        mssgs.innerHTML = `
            <div class="alert alert-success" role="alert">
                <p class="mb-2">Esto es el mensaje número ${messagesCount.toString()} recuperado del servidor</p>
                <div class="mb-0 text-end">
                    <strong>${new Date().toLocaleString()}</strong>
                </div>
            </div>
        `;
        messages.append(mssgs);
        if (messagesCount >= LIMIT_MESSAGES_GENERATED) {
            clearTimeout(messagesTimeout);
        }
    }, 3 * 1000); // Comprobación cada 3 segundos.
});

// Ejemplo 7: Carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

document.getElementById("btn-example-7").addEventListener("click", () => {
    console.log('--> Ejecutar ejemplo "Carousel".');

    setInterval(() => {
        slides.forEach(slide => {
            slide.classList.add("visually-hidden");
        });
        slides[currentSlide].classList.remove("visually-hidden");
        currentSlide = (currentSlide + 1) % slides.length;
    }, 3 * 1000); // Cambiar de slide cada 3 segundos.
});

// Ejemplo 8: Comprar entrada
const WAITING_TIME_LIMIT = 1 * (1000 * 60);// 1 minuto
let cancelShowInterval;
let busyWaitingTime = 0;

const toggleShowFooter = (status = true) => {
    const showFooter = document.getElementById("showFooter");
    if (status) {
        showFooter.classList.remove("visually-hidden");
    } else {
        showFooter.classList.add("visually-hidden");
    }
}

const toggleConfirmTicket = (status = true) => {
    const body = document.getElementById("showSi");
    if (status) {
        body.classList.remove("visually-hidden");
    } else {
        body.classList.add("visually-hidden");
    }
}

const toggleCancelTicket = (status = true) => {
    const body = document.getElementById("showNo");
    if (status) {
        body.classList.remove("visually-hidden");
    } else {
        body.classList.add("visually-hidden");
    }
}

const confirmarCompraTicket = () => {
    clearInterval(cancelShowInterval);
    toggleShowFooter(false);
    toggleConfirmTicket();
}

const cancelarCompraTicket = () => {
    console.log("--> cancelarCompraTicket");
    clearInterval(cancelShowInterval);
    toggleShowFooter(false);
    toggleCancelTicket();
}

document.getElementById("btn-example-8").addEventListener("click", () => {
    console.log('--> Ejecutar ejemplo "Comprar entrada".');
    // Reiniciamos todos los parámetros iniciales
    // Ocultándo todos los elementos que no debemos mostrar
    // Habilitando las opciones del footer
    // Reiniciando el contador de segundos a 0
    toggleShowFooter();
    toggleConfirmTicket(false);
    toggleCancelTicket(false);
    busyWaitingTime = 0;

    cancelShowInterval = setInterval(() => {
        busyWaitingTime = busyWaitingTime + 1000;
        
        if (busyWaitingTime >= WAITING_TIME_LIMIT) {
            cancelarCompraTicket();
        }
        console.log("--> Pasaron " + (busyWaitingTime/1000).toString() + " segundos de espera.");
    }, 1 * 1000);
});

document.getElementById("confirmShow").addEventListener("click", () => {
    console.log("--> Confirmar compra del ticket para el show <--");
    confirmarCompraTicket();
});

document.getElementById("closeShowTicket").addEventListener("click", () => {
    console.log("--> Cancelar espera para la compra del ticket para el show <--");
    cancelarCompraTicket();
});