"use strict";

/*
   --- Elementos HTML ---
*/

const outputSalida = document.querySelector("#resultado-clases");
const botonControlMario = document.querySelector("#btn-seleccionar-mario");
const marioGaleria = document.querySelector("#mario-galeria");
const botonControlLuigi = document.querySelector("#btn-estrella-luigi");
const luigiGaleria = document.querySelector("#luigi-galeria");
const botonGirarYoshi = document.querySelector("#btn-girar-yoshi");
const yoshiGaleria = document.querySelector("#yoshi-galeria");
const botonGirarBowser = document.querySelector("#btn-enemigo-bowser");
const bowserGaleria = document.querySelector("#bowser-galeria");
const botonGiganteWario = document.querySelector("#btn-gigante-wario");
const warioGaleria = document.querySelector("#wario-galeria");
const botonTransparenteKingboo = document.querySelector("#btn-transparente-kingboo");
const kingbooGaleria = document.querySelector("#kingboo-galeria");
const botonPixeladoSeta = document.querySelector("#btn-pixelado-seta");
const setaGaleria = document.querySelector("#seta-galeria");

/*
==================================================
   --- FUNCIONE ---
==================================================
*/

function seleccionarPersonaje (personaje, clase, slogan, output = outputSalida) {
    const nombre = personaje.textContent;
    personaje.classList.toggle(clase);

    if(personaje.classList.contains(clase)) {
        output.textContent = `${nombre} ${slogan}`;
    }else {
        output.textContent = `${nombre} ya no ${slogan}`;
    }
}

/*
   --- EVENTOS ---
*/

botonControlMario.addEventListener('click', () => {
    seleccionarPersonaje(marioGaleria, "seleccionado", "esta seleccionado!")
});

botonControlLuigi.addEventListener('click', () => { 
    seleccionarPersonaje(luigiGaleria, "estrella", "tiene la clase estrella!")
});

botonGirarYoshi.addEventListener('click', () => {
    seleccionarPersonaje(yoshiGaleria, "girando", "esta girando")
});

botonGirarBowser.addEventListener('click', () => {
    seleccionarPersonaje(bowserGaleria, "enemigo", "es enemigo")
});

botonGiganteWario.addEventListener('click', () => {
    seleccionarPersonaje(warioGaleria, "gigante", "es gigante")
});

botonTransparenteKingboo.addEventListener('click', () => {
    seleccionarPersonaje(kingbooGaleria, "transparente", "es transparente")
});

botonPixeladoSeta.addEventListener('click', () => {
    seleccionarPersonaje(setaGaleria, "pixelado", "es pixelado")
});