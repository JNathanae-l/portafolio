
var mensaje = document.querySelector("textarea");
var palabraArreglo = [];
var palabraArregloAuxiliar = [];
var contador = 0;
var auxiliar = ""

function disableText() {
    document.getElementById("img-muneco").style.display = "none";
    document.getElementById("texto-disponible").style.display = "none";
    document.querySelector("#texto-disponible-secundario").style.display = "none";
}

function desplegarAlerta() {
    if (mensaje.value != "") {
        disableText()
        descomponerPalabra();
        encritacionSimple();
        document.getElementById("resultado").innerHTML = palabraArregloAuxiliar.join('');
        auxiliar = palabraArregloAuxiliar.join('').toString();
        palabraArreglo = [];
        palabraArregloAuxiliar = [];
        return auxiliar;
    } else {
        alert("Por favor escribe el texto a desencriptar")
    }

}

function descomponerPalabra() {
    palabraArreglo = mensaje.value.split('')
    console.log(palabraArreglo);
}

function botonDesencriptar() {

    if (mensaje.value != "") {
        disableText();
        if (auxiliar != "") {
            var auxDesencriptador = auxiliar.replaceAll("ai", "a").toString();
            auxDesencriptador = auxDesencriptador.replaceAll("enter", "e");
            auxDesencriptador = auxDesencriptador.replaceAll("imes", "i");
            auxDesencriptador = auxDesencriptador.replaceAll("ober", "o");
            auxDesencriptador = auxDesencriptador.replaceAll("ufat", "u");
        } else {
            var auxDesencriptador = mensaje.value.replaceAll("ai", "a");
            auxDesencriptador = auxDesencriptador.replaceAll("enter", "e");
            auxDesencriptador = auxDesencriptador.replaceAll("imes", "i");
            auxDesencriptador = auxDesencriptador.replaceAll("ober", "o");
            auxDesencriptador = auxDesencriptador.replaceAll("ufat", "u");
        }



        document.getElementById("resultado").innerHTML = auxDesencriptador;
        palabraArreglo = [];
        palabraArregloAuxiliar = [];
        console.log(auxDesencriptador);

        auxDesencriptador = "";
    } else {
        alert("Por favor escribe el texto a desencriptar")
    }

}

function encritacionSimple() {
    console.log(palabraArreglo.length);
    while (contador < palabraArreglo.length) {

        var auxSwitch = palabraArreglo[contador];

        switch (auxSwitch) {
            case 'a':
                palabraArregloAuxiliar.push("ai");
                break;

            case 'e':
                palabraArregloAuxiliar.push("enter");
                break;
            case 'i':
                palabraArregloAuxiliar.push("imes");
                break;
            case 'o':
                palabraArregloAuxiliar.push("ober");
                break;
            case 'u':
                palabraArregloAuxiliar.push("ufat");
                break;
            default:
                palabraArregloAuxiliar.push(palabraArreglo[contador]);
                break;
        }
        console.log(palabraArregloAuxiliar);

        contador++;
    }
    contador = 0;

    return palabraArregloAuxiliar;

}

var boton = document.querySelector("#encriptar");
boton.onclick = desplegarAlerta;

var botonCopiar = document.querySelector("#desencriptar");
botonCopiar.onclick = botonDesencriptar;

var botonCopiar = document.getElementById("copiar");
botonCopiar.onclick = function () {
    navigator.clipboard.writeText(resultado.innerHTML);
    document.getElementById("resultado").innerHTML = ""
}
