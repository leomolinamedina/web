
"use strict";

const ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");
ulGaleriaMario.classList.add("personajes");

let personajesGaleriaMario = ["Mario", "Luigi", "Yoshi", "Bowser", "Wario", "King-Boo", "Lakitu", "Seta azul"];

let bgColorsGaleriaMario = ["steelblue", "orange", "gold", "orchid", "lightyellow", "palegreen", "tomato", "dodgerblue"];

// Primer item
let itemGaleria = document.createElement("li");

let figureGaleria = document.createElement("figure");
figureGaleria.classList.add("img-before", "foto-mario");
figureGaleria.style.backgroundColor = bgColorsGaleriaMario[6];

let figcaptionGaleria = document.createElement("figcaption");
figcaptionGaleria.textContent = personajesGaleriaMario[6];

itemGaleria.appendChild(figureGaleria);
figureGaleria.appendChild(figcaptionGaleria);
ulGaleriaMario.appendChild(itemGaleria);


// Segundo item
let itemGaleria2 = document.createElement("li");

let figureGaleria2 = document.createElement("figure");
figureGaleria2.classList.add("img-before", "foto-mario");
figureGaleria2.style.backgroundColor = bgColorsGaleriaMario[7];

let figcaptionGaleria2 = document.createElement("figcaption");
figcaptionGaleria2.textContent = personajesGaleriaMario[7];

itemGaleria2.appendChild(figureGaleria2);
figureGaleria2.appendChild(figcaptionGaleria2);
ulGaleriaMario.appendChild(itemGaleria2);


// Seleccionar todas las figuras y captions
let figuras = document.querySelectorAll("#galeria-mario figure");
let captions = document.querySelectorAll("#galeria-mario figcaption");

figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
    figura.classList.add("foto-mario");
    figura.onclick = pintarFigura;
});

captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});

const info = document.querySelector("#info");
let itemsPaletaColores = document.querySelectorAll("#paleta-colores li");

let colorSeleccionado = null;

itemsPaletaColores.forEach(function (li) {
    li.style.backgroundColor = li.textContent;
    li.onclick = seleccionarColor;
});

function seleccionarColor() {
    colorSeleccionado = this.textContent;
    info.textContent = `Color seleccionado: ${colorSeleccionado}`;
}

function pintarFigura() {
    if (colorSeleccionado === null) {
        info.textContent = "Primero elige un color de la paleta";
        return;
    }

    this.style.backgroundColor = colorSeleccionado;
    info.textContent = `${this.textContent} ahora es ${colorSeleccionado}`;
}
