

const figuras = document.querySelectorAll("#galeria-mario figure");
const imageMario = document.querySelector("#mario");

let colores = ["tomato", "orange", "gold", "mediumseagreen", "dodgerblue", "orchid", "yellow"];

figuras.forEach((figura, indice) => {
    figura.style.backgroundColor = colores[indice];

    figura.classList.add('foto-mario');
    
    figura.querySelector("figcaption").textContent = colores[indice];
    figura.querySelector("figcaption").style.color = colores[indice];
});

let pepe = document.querySelector("#info");

pepe.textContent = figuras.length;

figuras[3].classList.add('foto-mario');

// Crear otro item a la lista galeria-mario

let listaGaleria = document.querySelector("#galeria-mario ul.galeria");

let itemGaleria = document.createElement("li");
let figureGaleria = document.createElement("figure");
figureGaleria.classList.add("img-before", "foto-mario");
figureGaleria.style.backgroundColor = colores[figuras.length];
let figcaptionGaleria = document.createElement("figcaption");
figcaptionGaleria.textContent = colores[figuras.length];

itemGaleria.appendChild(figureGaleria);
figureGaleria.appendChild(figcaptionGaleria);
listaGaleria.appendChild(itemGaleria);
