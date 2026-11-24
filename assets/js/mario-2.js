"use strict";
/*
let figuras = document.querySelectorAll("#galeria-mario figure");

let imagenesMarioBros = [
    "../assets/css/images/marioBros/mario.webp",
    "../assets/css/images/marioBros/bowser.webp",
    "../assets/css/images/marioBros/king-boo.webp",
    "../assets/css/images/marioBros/lakitu.webp",
    "../assets/css/images/marioBros/luigi.webp",
    "../assets/css/images/marioBros/setaAzul.webp",
    "../assets/css/images/marioBros/wario.webp",
    "../assets/css/images/marioBros/yoshi.webp"
]

figuras.forEach(function (figura, indice) {
    figura.style.backgroundImage = `url("${imagenesMarioBros[indice]}")`
});

console.log(figuras);
*/

const ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");
ulGaleriaMario.classList.add("personajes");

let personajesGaleriaMario = ["Mario", "Luigi", "Yoshi", "Bowser", "Wario", "King-Boo"];

let bgColorsGaleriaMario = ["steelblue", "orange", "gold", "orchid", "lightyellow", "palegreen"];

let figuras = document.querySelectorAll("#galeria-mario figure");
let captions = document.querySelectorAll("#galeria-mario figcaption");

console.log(figuras)

figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
});

captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});