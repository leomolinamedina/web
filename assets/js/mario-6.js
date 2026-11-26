
"use strict";

/*
   --- Elementos HTML ---
*/

const outputSalida = document.querySelector("#resultado-clases");
const botones = document.querySelectorAll(".lista-controles button");

/*
==================================================
   --- FUNCIONES ---
==================================================
*/

function seleccionarPersonaje(personaje, clase, output = outputSalida) {
    const nombre = personaje.querySelector("figcaption").textContent;

    personaje.classList.toggle(clase);

    if (personaje.classList.contains(clase)) {
        output.textContent = `${nombre} ahora tiene la clase ${clase}.`;
    } else {
        output.textContent = `${nombre} ya no tiene la clase ${clase}.`;
    }
}

/*
   --- EVENTOS ---
*/

botones.forEach((boton) => {

    const nombrePersonaje = boton.id.split("-").pop();

    const personaje = document.querySelector(`#${nombrePersonaje}-galeria`);

    const accion = boton.id.split("-").slice(1, 2).join();
    console.log(accion);

    let clase = accion;

    if (accion === "seleccionar") {
        clase = "seleccionado";
    } else if (accion === "girar") {
        clase = "girando";
    }

    if (personaje) {
        boton.addEventListener("click", () => {
            seleccionarPersonaje(personaje, clase);
        });
    }

});
