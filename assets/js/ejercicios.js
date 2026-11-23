/*
    Primeros pasos con JavaScript

    Ejercicios nivel 0 continuación de las dinámicas de 
    Diagramas de flujo y pseudocódigos
*/

function sumarDosNumeros(n1 , n2) {
    let suma = n1 + n2
    return suma;
}

function restarDosNumeros(n1, n2) {
    let resta = n1 - n2;
    return resta;
}

// FUNCIÓN PARA REALIZAR UNA MULTIPLICACIÓN
function multiplicarDosNumeros(n1, n2) {
    let producto = n1 * n2;
    return producto;
}

function dividirDosNumeros(n1, n2) {
    let cociente = n1 / n2;

    return cociente;
}

function dividirDosNumeros3() {
    // Pedimos el segundo número al usuario
    let n2 = parseFloat(prompt("Introduce el divisor:"));

    if (n2 !== 0) {
        // Pedimos el primer número al usuario
        let n1 = parseFloat(prompt("Introduce el dividendo:"));
        let resultado = n1 / n2;

        alert("La división entre " + n1 + " / " + n2 + " es " + resultado);
    } else {
        alert("El divisor no puede ser cero!!");
        // n2 = parseFloat(prompt("Introduce un divisor distinto de cero"));
        dividirDosNumeros();
    }
}

function dividirDosNumeros2() {
    // Pedimos el primer número al usuario
    let n1 = parseFloat(prompt("Introduce el dividendo:"));

    // Pedimos el segundo número al usuario
    // let n2 = parseFloat(prompt("Introduce el divisor:"));
    let n2 = 0;

    while (n2 === 0) {
        n2 = parseFloat(prompt("Introduce un divisor distinto de cero"));

        if (n2 === 0) {
            alert("El divisor no puede ser cero!!");
        }
    }

    let resultado = n1 / n2;

    alert("La división entre " + n1 + " / " + n2 + " es " + resultado);
}

function preguntarDivisor() {
    // Pedimos el primer número al usuario
    let n1 = parseFloat(prompt("Introduce el dividendo:"));

    if (n1 !== 0) {
        preguntarDivisor();
    }
}

function CuadradoYCubo() {
    let n1 = parseFloat(prompt("Introduce un número:"));
    let cuadrado = n1 ** 2;
    let cubo = n1 ** 3;

    console.log("El cuadrado de " + n1 + " es " + cuadrado);
    console.log("El cubo de " + n1 + " es " + cubo);
}

function calcularMediaAritmetica() {
    let n1 = parseFloat(prompt("Introduzca el número 1:"));
    let n2 = parseFloat(prompt("Introduzca el número 2:"));
    let n3 = parseFloat(prompt("Introduzca el número 3:"));

    let resultado = (n1 + n2 + n3) / 3;

    console.log("La media aritmética de " + n1 + ", " + n2 + " y " + n3 + " es: " + resultado);
}


function calcularMediaAritmeticaPlus() {
    let divisor = parseInt(prompt("Introduzca el divisor de la media aritmética:"));

    // Validar que el divisor no sea 0
    while (divisor === 0) {
        alert("El divisor no puede ser 0");
        divisor = parseInt(prompt("Introduzca nuevamente el divisor de la media aritmética:"));
    }

    let suma = 0;
    let contador = 1;
    let message = "La media aritmética de ";

    while (contador <= divisor) {
        let num = parseFloat(prompt("Introduzca el número " + contador + " de la serie para hallar la media aritmética:"));

        if (contador < divisor) {
            message = message + num + " y ";
        } else {
            message = message + num;
        }

        suma = suma + num;
        contador++;
    }

    let resultado = suma / divisor;

    message = message + " es: " + resultado;

    console.log(message);
}



function escribirFraseCastigo() {
    let vueltas = parseInt(prompt("Cuántas veces se deber escribir la frase de castigo?"));
    let frase = prompt("Cuál es la frase de castigo?");
    let message = "";

    for (let i = 1; i <= vueltas; i++) {
        // Guardamos el texto a mostrar por Consola en una variable String
        message = i + ". ";
        // message = message + frase;
        message += frase;

        console.log(message);
    }
}

function escribirFraseCastigoConWhile() {
    let vueltas = parseInt(prompt("Cuántas veces se deber escribir la frase de castigo?"));
    let frase = prompt("Cuál es la frase de castigo?");
    let message = "";

    let i = 1;
    while (i <= vueltas) {
        message = i + ".- ";
        message += frase;

        console.log(message);

        // i = i + 1;
        // i += 1;
        i++;
    }
}

function escribirFraseCastigoConDoWhile() {
    let vueltas = parseInt(prompt("Cuántas veces se deber escribir la frase de castigo?"));
    let frase = prompt("Cuál es la frase de castigo?");
    let message = "";

    let i = 1;
    do {
        message = i + ": ";
        message += frase;

        console.log(message);
        i++;
    } while (i <= vueltas);
}

function mostrarTablaDeMultiplicarDeUnNumero() {
    let numero = parseInt(prompt("De qué numero te muestro la tabla de multiplicar?"));
    let message = "";

    console.log("Tabla del " + numero);
    console.log("-------------");

    for (let i = 1; i <= 10; i++) {
        message = numero + " x " + i + " = " + numero * i;

        console.log(message);
    }
}

function mostrarNumerosParesHastaValorDeUsuario() {
    let numero = parseInt(prompt("Hasta qué numero te muestro los pares?"));
    let message = "";

    console.log("Números pares del cero al " + numero);
    console.log("------------------------------");

    for (let i = 0; i <= numero; i += 2) {
        // message = message + i + ", ";
        message += i + ", ";
    }
    console.log(message);
}

function mostrarAprobado() {
    let corte = parseFloat(prompt("Escriba la nota de corte para aprobar"));
    let nota = parseFloat(prompt("Escriba la nota obtenida"));

    if (nota >= corte) {
        console.log("Aprobado");
    }
}

function pedirEdadRequerida() {
    let edadMinima = parseInt(prompt("Escriba la edad mínima"));
    let edadAlumnado = parseInt(prompt("Esriba la edad de la persona"));

    if (edadAlumnado >= edadMinima) {
        console.log("Puede pasar");
    } else {
        console.log("Permiso denegado");
    }
}

/*
    Llamadas a las funciones
*/

function seleccionarOperacion() {
    let operacion = parseInt(prompt("Seleccione la operación que desea ejecutar [01: suma | 02: resta | 03: multiplicación | 04: división]"));

    if (operacion === 1) {
        alert("Has seleccionado sumar");
        sumarDosNumeros();
    } else if (operacion === 2) {
        alert("Has seleccionado RESTAR");
        restarDosNumeros();
    } else if (operacion === 3) {
        alert("Has seleccionado MULTIPLICAR");
        multiplicarDosNumeros();
    } else if (operacion === 4) {
        alert("Has seleccionado DIVIDIR");
        dividirDosNumeros();
    } else {
        alert("Por favor, seleccione una opción válida [1, 2, 3, 4]");
        seleccionarOperacion();
    }
}

function clasificarNota() {
    let nota = parseFloat(prompt("Introduce una nota entre 0 y 10:"));

    while (nota < 0 || nota > 10) {
        alert("La nota introducida no es válida. Debe ser un número entero entre 0 y 10.");

        nota = parseFloat(prompt("Introduce una nota entre 0 y 10:"));
    }

    if (nota >= 0 && nota < 5) {
        console.log("Suspenso");
    } else if (nota >= 5 && nota < 7) {
        console.log("Aprobado");
    } else if (nota >= 7 && nota < 9) {
        console.log("Notable");
    } else if (nota >= 9 && nota < 10) {
        console.log("Sobresaliente");
    } else if (nota === 10) {
        console.log("Matrícula de honor");
    } else {
        console.log("La nota introducida no es válida. Debe estar entre 0 y 10.");
    }
}

function clasificarNota() {
    let nota = parseFloat(prompt("Introduce una nota entre 0 y 10:"));

    while (nota < 0 || nota > 10) {
        alert("La nota introducida no es válida. Debe ser un número entero entre 0 y 10.");

        nota = parseFloat(prompt("Introduce una nota entre 0 y 10:"));
    }

    switch ( true ) {
        case (nota >= 0 && nota < 5):
            console.log("Suspenso");
            break;

        case (nota >= 5 && nota < 7):
            console.log("Aprobado");
            break;

        case (nota >= 7 && nota < 9):
            console.log("Notable");
            break;

        case (nota >= 9 && nota < 10):
            console.log("Sobresaliente");
            break;

        case (nota === 10):
            console.log("Matrícula de honor");
            break;
    }
}

function seleccionarActividad() {
    let opcion = parseInt(prompt("Selecciona una actividad para el castigo: \n" + "-1. Limpiar la pizarra \n" + "-2. Recoger el patio \n" + "-3. Ordenar la biblioteca \n" + "-4. Escribir 100 frases"));

    while (opcion <1 || opcion > 4 ) {
        alert("La opción no es válida. Debes elegir entre 1 y 4.");

        opcion = parseInt(prompt("Selecciona una opción entre 1 y 4:"));
    }

    switch (opcion) {
        case 1:
            console.log("Limpiar la pizarra");
            break;

        case 2:
            console.log("Recoger el patio");
            break;

        case 3:
            console.log("Ordenar la biblioteca");
            break;

        case 4:
            console.log("Escribir 100 frases");
            break;

        default:
            console.log("La opción seleccionada no es válida. Debes elegir entre 1 y 4.");
            break;
    }
}

function calcularParImpar() {
    let numero = parseInt(prompt("Introduzca un número:"));

    if (numero % 2 === 0) {
        alert("El número " + numero + " es PAR");
    } else {
        alert("El número " + numero + " es IMPAR");
    }
}



function calcularSumaGauss() {
    let dias = parseInt(prompt("Introduzca la cantidad de días del desafío:"));

    let resultado1 = 0;
    let resultado2 = 0;
    let message = "";

    resultado1 = (dias * (dias + 1)) / 2;

    for (let contador = 1; contador <= dias; contador++) {
        // resultado2 = resultado2 + contador;
        resultado2 += contador;
    }

    let comparacion = resultado1 === resultado2;

    message = "Resultado mediante fórmula de Gauss: " + resultado1 +
              "\nResultado mediante FOR: " + resultado2 +
              "\n¿Los resultados son iguales? " + comparacion;

    alert(message);
}


function adivinarQueNumeroEstoyPensando() {
    let numeroSecreto = 7;
    let numeroUsuario = 0;

    while (numeroUsuario !== numeroSecreto) {
        numeroUsuario = parseInt(prompt("Adivina el número que estoy pensando (entre 1 y 10):"));

        if (numeroUsuario < numeroSecreto) {
            alert("El número que estoy pensando es MAYOR");
        } else if (numeroUsuario > numeroSecreto) {
            alert("El número que estoy pensando es MENOR");
        } else {
            alert("¡ENHORABUENA! Has acertado");
        }
    }
}

function adivinarQueNumeroEstoyPensando2() {

    let jugarNuevamente = "s";

    do {
        // Generar número aleatorio entre 1 y 10
        let numeroSecreto = 7;

        let numeroUsuario = 0;
        let intentos = 0;

        // Definir el rango inicial
        let rangoMinimo = 1;
        let rangoMaximo = 10;

        // Preguntar hasta que el usuario acierte
        while (numeroUsuario !== numeroSecreto) {

            // Validar que el usuario introduzca un número correcto
            let entrada = prompt("Adivina el número que estoy pensando (entre 1 y 10):");

            if (entrada === null) {
                return;
            }

            numeroUsuario = Number(entrada);

            if (!Number.isInteger(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
                alert("Entrada no válida. Introduzca un número entero entre 1 y 10.");
                numeroUsuario = 0;
                continue;
            }

            // Contabilizar intento válido
            intentos++;

            // Comprobar si el número es correcto
            if (numeroUsuario < numeroSecreto) {

                rangoMinimo = Math.max(rangoMinimo, numeroUsuario + 1);

                alert("El número que estoy pensando es MAYOR.\n\nEl rango posible ahora es entre " + rangoMinimo + " y " + rangoMaximo + ".");

            } else if (numeroUsuario > numeroSecreto) {

                rangoMaximo = Math.min(rangoMaximo, numeroUsuario - 1);

                alert("El número que estoy pensando es MENOR.\n\nEl rango posible ahora es entre " + rangoMinimo + " y " + rangoMaximo + ".");

            } else {

                alert("¡ENHORABUENA! Has acertado");
            }
        }

        // Mostrar intentos realizados
        alert("Has acertado en " + intentos + " intentos.");

        // Validar si desea volver a jugar
        do {
            let respuesta = prompt("¿Deseas volver a jugar? (s/n)");

            jugarNuevamente = respuesta === null ? "n" : respuesta.trim().toLowerCase();

            if (jugarNuevamente !== "s" && jugarNuevamente !== "n") {
                alert("Respuesta no válida. Introduzca S para continuar o N para salir.");
            }

        } while (jugarNuevamente !== "s" && jugarNuevamente !== "n");

    } while (jugarNuevamente === "s");

    console.log("Gracias por jugar. ¡Hasta pronto!");
}



// console.log("El resultado de la mulplicación es " + multiplicarDosNumeros());
// sumarDosNumeros();
// restarDosNumeros();
// multiplicarDosNumeros();
// dividirDosNumeros();
// CuadradoYCubo();
// calcularMediaAritmetica();
// calcularMediaAritmeticaPlus();
// calcularParImpar();
// calcularSumaGauss();
// adivinarQueNumeroEstoyPensando2();


// seleccionarOperacion();
// mostrarTablaDeMultiplicarDeUnNumero();
// mostrarNumerosParesHastaValorDeUsuario();
// mostrarAprobado();
// pedirEdadRequerida();
// clasificarNota();
// seleccionarActividad();

function probarFunciones() {
    n1 = parseFloat(prompt("Escribe el primer numero"));
    n2 = parseFloat(prompt("Escribe el segundo numero"));

    let suma = sumarDosNumeros(n1, n2);
    let resta = restarDosNumeros(n1, n2);
    let producto = multiplicarDosNumeros(n1, n2);

    console.log("La suma de " + n1 + " + " + n2 + " es " + suma);
    console.log("La resta de " + n1 + " - " + n2 + " es " + resta);
    console.log("El producto de " + n1 + " * " + n2 + " es " + producto);

    while (n2 === 0) {
        alert("El divisor no puede ser cero!!");
        n2 = parseFloat(prompt("Introduce un divisor distinto de cero"));
    }

    let cociente = dividirDosNumeros(n1, n2);

    console.log("El cociente de " + n1 + " / " + n2 + " es " + cociente);
}

// probarFunciones();

function probarOperaciones() {
    let operacion = parseInt(prompt("Selecciona una operacion a realizar: \n" + "-1. Sumar \n" + "-2. Restar \n" + "-3. Multiplicar \n" + "-4. Dividir"));

    while (operacion <1 || operacion > 4 ) {
        alert("La opción no es válida. Debes elegir entre 1 y 4.");

        operacion = parseInt(prompt("Selecciona una opción entre 1 y 4:"));
    }

    n1 = parseFloat(prompt("Escribe el primer numero"));
    n2 = parseFloat(prompt("Escribe el segundo numero"));

    switch (operacion) {
        case 1:
            let suma = sumarDosNumeros(n1, n2);
            console.log("La suma de " + n1 + " + " + n2 + " es " + suma);
            break;

        case 2:
            let resta = restarDosNumeros(n1, n2);
            console.log("La resta de " + n1 + " - " + n2 + " es " + resta);
            break;

        case 3:
            let producto = multiplicarDosNumeros(n1, n2);
            console.log("El producto de " + n1 + " * " + n2 + " es " + producto);
            break;

        case 4:
            while (n2 === 0) {
                alert("El divisor no puede ser cero!!");
                n2 = parseFloat(prompt("Introduce un divisor distinto de cero"));
            }

            let cociente = dividirDosNumeros(n1, n2);

            console.log("El cociente de " + n1 + " / " + n2 + " es " + cociente);
            break;
    }
}

probarOperaciones();