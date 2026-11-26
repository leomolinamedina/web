"use strict";

// ===================================O
// 1. CLASE MARIO
// ===================================

class Mario {
    constructor(nombre = "Mario", sprite = "../assets/css/images/marioBros/super-mario-bross.webp") {
        this.nombre = nombre;
        this.sprite = sprite;
        this.x = 20;
        this.scale = 1;
        this.rotation = 0;

        this.escenario = document.querySelector("#escenario");

        // Crear elemento HTML
        this.elemento = document.createElement("figure");

        this.elemento.className = "mario";

        this.elemento.innerHTML = `
            <img
                src="${sprite}"
                alt="${this.nombre}"
                draggable="false"
            >
            <figcaption>${this.nombre}</figcaption>
        `;

        // Insertar Mario en el escenario
        this.escenario.appendChild(this.elemento);

        // Actualizar posición
        this.actualizar();
    }

    // ===================================
    // ACTUALIZAR
    // ===================================

    actualizar() {
        this.elemento.style.left = this.x + "px";

        this.elemento.style.transform = `
            scale(${this.scale})
            rotate(${this.rotation}deg)
        `;
    }

    // ===================================
    // AVANZAR
    // ===================================

    avanzar(velocidad = 500) {
        const maxX = this.escenario.clientWidth - this.elemento.offsetWidth;

        this.x = Math.min(this.x + 100, maxX);

        this.elemento.style.transition = `left ${velocidad}ms ease`;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} avanza.`);
    }

    // ===================================
    // RETROCEDER
    // ===================================

    retroceder(velocidad = 500) {
        this.x = Math.max(this.x - 100, 0);

        this.elemento.style.transition = `left ${velocidad}ms ease`;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} retrocede.`);
    }

    // ===================================
    // SALTAR
    // ===================================

    saltar() {
        this.elemento.classList.remove("saltando");

        // Reiniciar animación
        void this.elemento.offsetWidth;

        this.elemento.classList.add("saltando");

        setTimeout(() => {
            this.elemento.classList.remove("saltando");
        }, 700);

        this.mostrarMensaje(`${this.nombre} salta.`);
    }

    // ===================================
    // DUPLICAR
    // ===================================

    duplicar() {
        const nuevoMario = new Mario(this.nombre + " clon");

        nuevoMario.x = this.x + 100;
        nuevoMario.scale = this.scale;
        nuevoMario.rotation = this.rotation;

        nuevoMario.actualizar();

        // Registrar el nuevo objeto
        marios.push(nuevoMario);

        // Convertirlo en personaje activo
        marioActivo = nuevoMario;

        this.mostrarMensaje(`${this.nombre} se ha duplicado.`);

        return nuevoMario;
    }

    // ===================================
    // AUMENTAR
    // ===================================

    aumentar() {
        this.scale += 0.2;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} aumenta de tamaño.`);
    }

    // ===================================
    // ENCOGER
    // ===================================

    encoger() {
        this.scale = Math.max(0.4, this.scale - 0.2);

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} se encoge.`);
    }

    // ===================================
    // ROTAR
    // ===================================

    rotar(grados = 45) {
        this.rotation += grados;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} rota ${grados} grados.`);
    }

    // ===================================
    // REINICIAR
    // ===================================

    reiniciar() {
        this.x = 20;
        this.scale = 1;
        this.rotation = 0;

        this.actualizar();

        this.mostrarMensaje(`${this.nombre} vuelve a su posición inicial.`);
    }

    // ===================================
    // MOSTRAR MENSAJES
    // ===================================

    mostrarMensaje(texto) {
        document.querySelector("#info").textContent = texto;
    }
}

// ===================================
// 2. Personajes
// ===================================

const ruta = "../assets/css/images/marioBros/super-mario-bross.webp";
const sprite = [
    "mario.webp",
    "luigi.webp",
    "yoshi.webp",
    "bowser.webp",
    "king-boo.webp",
    "lakitu.webp",
    "setaAzul.webp",
    "wario.webp",
];

const nombres = [
    "Mario",
    "Luigi",
    "Yoshi",
    "Bowser",
    "King Boo",
    "Lakitu",
    "Seta Azul",
    "Wario",
]

// ===================================
// 2. VARIABLES DE CONTROL
// ===================================

// Array que almacena todos los objetos Mario
const marios = [];

// Personaje que recibirá las órdenes
let marioActivo = null;

// Contador de personajes
let contadorMario = 0;

// ===================================
// 3. CREAR UN NUEVO MARIO
// ===================================

function crearMario() {

    contadorMario++;

    const indice = (contadorMario - 1) % nombres.length;

    const nombre = nombres[indice];

    const imagen = ruta.replace("super-mario-bross.webp", sprite[indice]);

    const nuevoMario = new Mario(nombre, imagen);

    marios.push(nuevoMario);

    marioActivo = nuevoMario;

    nuevoMario.mostrarMensaje(`${nombre} ha sido creado.`);

    return nuevoMario;
}

// ===================================
// 4. EVENTO: CREAR MARIO
// ===================================

document.addEventListener("keydown", (evento) => {
    if (evento.code === "Enter") {
        crearMario();
    }
});

// ===================================
// 5. EVENTOS DE MOVIMIENTO
// ===================================

document.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowRight" && marioActivo) {
        evento.preventDefault();
        marioActivo.avanzar(800);
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowLeft" && marioActivo) {
        evento.preventDefault();
        marioActivo.retroceder(800);
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowUp" && marioActivo) {
        evento.preventDefault();
        marioActivo.saltar();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.code === "Space" && marioActivo) {
        evento.preventDefault();
        marioActivo.saltar();
    }
});

// ===================================
// 6. EVENTOS DE TRANSFORMACIÓN
// ===================================

document.addEventListener("keydown", (evento) => {
    if (evento.key === "a") {
        evento.preventDefault();
        marioActivo.aumentar();
    }
});


document.addEventListener("keydown", (evento) => {
    if (evento.key === "e") {
        evento.preventDefault();
        marioActivo.encoger();
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "r") {
        evento.preventDefault();
        marioActivo.rotar(90);
    }
});


document.addEventListener("keydown", (evento) => {
    if (evento.key === "d") {
        evento.preventDefault();
        marioActivo.duplicar();
    }
});


document.addEventListener("keydown", (evento) => {
    if (evento.code === "Backspace") {
        evento.preventDefault();
        marioActivo.reiniciar();
    }
});
