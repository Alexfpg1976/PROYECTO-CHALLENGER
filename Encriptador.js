function encrytarTexto() {
    let text = document.getElementById("introducirTexto").value;
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("SalidaTexto").value = encryptedText;
    document.getElementById("introducirTexto").value = "";
    mostrarResultado();
    return;
}

function desencryptarTexto() {
    let text = document.getElementById("introducirTexto").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("SalidaTexto").value = decryptedText;
    document.getElementById("introducirTexto").value = "";
    mostrarResultado();
    return;
}

function copiarTexto() {
    let outputText = document.getElementById("SalidaTexto");
    outputText.select();
    document.execCommand("copy");
    limpiar();
    ocultarResultado();
    return;
}

function limpiar() {
    document.querySelector('#SalidaTexto').value = '';
    return;
}

function mostrarResultado() {
    document.getElementById("SalidaTexto").style.display = 'block';
    document.getElementById("BotonCopiar").style.display = 'block';
    document.getElementById("Muñeco").style.display = 'none';
}

function ocultarResultado() {
    document.getElementById("SalidaTexto").style.display = 'none';
    document.getElementById("BotonCopiar").style.display = 'none';
    document.getElementById("Muñeco").style.display = 'block';
}