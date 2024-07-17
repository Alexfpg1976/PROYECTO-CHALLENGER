function encryptarTexto() {
    let inputText = document.getElementById("inputText").value;
    let encryptarTexto = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptarTexto;
}

function desencryptarTexto() {
    let inputText = document.getElementById("inputText").value;
    let desencryptarTexto = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = desencryptarTexto;
}