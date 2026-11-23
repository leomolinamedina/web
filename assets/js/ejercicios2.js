
function crearListaColores() {
    let colores = [];

    colores = ['rojo', 'verde', 'azul'];

    alert(colores[0]);
}

// crearListaColores();

function hacerListaCompra() {
    let lista = [];

    lista = ['Leche', 'Pan', 'Huevo'];

    console.log("La lista de compra es: " + lista);

    return lista;
}
// hacerListaCompra();

function accederAUnElemento() {
    let comida = ['Pizza', 'Hambuguesa', 'Paella'];

    // Que muestre solamente Hamburguesa

    console.log("Quiero comer " + comida[1]);
}
// accederAUnElemento();

function contarMisMascotas() {
    let mascotas = ['Marisa', 'Calcetines', 'Tatoo', 'Botas', 'Kiti', 'Mixo', 'Rocky', 'Mateo', 'Dreyfus'];

    console.log("tengo " + mascotas.length + " mascotas");
}
// contarMisMascotas();

function agregarProductoListaCompra() {
    let lista = hacerListaCompra();

    lista.push('Manzana');

    console.log(lista)
}
// agregarProductoListaCompra();

function eliminarTareaUltima() {
    let tarea = ["Estudiar", "Comprar pan", "Hacer testamento"]

    tarea.pop();

    console.log(tarea);
}
// eliminarTareaUltima();


function mostrarSeriesTV() {
    let series = [
        "Dark",
        "Breaking Bad",
        "Stranger Things"
    ];

    let message = "Mis series favoritas son: ";

    for (let i = 0; i < series.length; i++) {
        if (i === series.length - 2) {
            message += series[i] + " y ";
        } else if (i === series.length - 1) {
            message += series[i];
        } else {
            message += series[i] + ", ";
        }
    }

    console.log(message);
}
// mostrarSeriesTV();

function buscarNombre() {
    let amigos = [
        "Carlos",
        "Lucía",
        "María"
    ];

    let nombreABuscar = "Maria"
    let resultado = false;

    resultado = amigos.includes(nombreABuscar);
    console.log(nombreABuscar + " esta en la lista de amigos? " + resultado);
}
// buscarNombre();

function mostrarMenuDeUnDia() {
    let menu = ["Hamburgues", "Pizza", "Raxo", "Pimientos rellenos", "Hallaca"];

    let menuDiaX = menu[2];

    console.log("Los miercoles como " + menuDiaX);
}
mostrarMenuDeUnDia();

function sumarGastos() {
    let gastos = [25, 40, 15, 20];
    let total = 0;

    for(let i = 0; i < gastos.length; i++) {

        total += gastos[i];
        console.log("Parciar gastos");
        console.log(total);
    }

    console.log("Total Gastos:");
    console.log(total);
}
sumarGastos();