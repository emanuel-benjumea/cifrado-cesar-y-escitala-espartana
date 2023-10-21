function cifrarEscitala() {
    const frase = document.getElementById("escitalaInput").value;
    const clave = parseInt(document.getElementById("escitalaClave").value);
    const resultado = escitalaEspartana(frase, clave);
    document.getElementById("escitalaOutput").textContent = resultado;
}

function descifrarEscitala() {
    const frase = document.getElementById("escitalaInput").value;
    const clave = parseInt(document.getElementById("escitalaClave").value);
    const resultado = descifrarEscitalaEspartana(frase, clave);
    document.getElementById("escitalaOutput").textContent = resultado;
}

function cifrarCesar() {
    const frase = document.getElementById("cesarInput").value;
    const desplazamiento = parseInt(document.getElementById("cesarClave").value);
    const resultado = codigoCesar(frase, desplazamiento);
    document.getElementById("cesarOutput").textContent = resultado;
}

function descifrarCesar() {
    const frase = document.getElementById("cesarInput").value;
    const desplazamiento = parseInt(document.getElementById("cesarClave").value);
    const resultado = descifrarCodigoCesar(frase, desplazamiento);
    document.getElementById("cesarOutput").textContent = resultado;
}

function escitalaEspartana(frase, clave) {
    let resultado = "";
    const numLineas = clave;
    const numColumnas = Math.ceil(frase.length / numLineas);
    const matriz = new Array(numLineas).fill('').map(() => new Array(numColumnas).fill(''));

    let index = 0;
    for (let i = 0; i < numColumnas; i++) {
        for (let j = 0; j < numLineas; j++) {
            if (index < frase.length) {
                matriz[j][i] = frase[index];
                index++;
            }
        }
    }

    for (let i = 0; i < numLineas; i++) {
        for (let j = 0; j < numColumnas; j++) {
            resultado += matriz[i][j];
        }
    }

    return resultado;
}

function descifrarEscitalaEspartana(frase, clave) {
    const numLineas = clave;
    const numColumnas = Math.ceil(frase.length / numLineas);
    const matriz = new Array(numLineas).fill('').map(() => new Array(numColumnas).fill(''));

    let index = 0;
    for (let i = 0; i < numLineas; i++) {
        for (let j = 0; j < numColumnas; j++) {
            if (index < frase.length) {
                matriz[i][j] = frase[index];
                index++;
            }
        }
    }

    let resultado = "";
    for (let i = 0; i < numColumnas; i++) {
        for (let j = 0; j < numLineas; j++) {
            resultado += matriz[j][i];
        }
    }

    return resultado;
}

function codigoCesar(frase, desplazamiento) {
    let resultado = "";
    for (let i = 0; i < frase.length; i++) {
        let charCode = frase.charCodeAt(i);
        if (frase[i].match(/[a-z]/i)) {
            let base = frase[i].toLowerCase() === frase[i] ? 97 : 65;
            charCode = (charCode - base + desplazamiento) % 26 + base;
        }
        resultado += String.fromCharCode(charCode);
    }
    return resultado;
}

function descifrarCodigoCesar(frase, desplazamiento) {
    return codigoCesar(frase, (26 - desplazamiento) % 26);
}
