function encrytarTexto() {
    let text = document.getElementById("inputText").value;
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
    document.getElementById("inputText").value = "";
    

function desencryptarTexto() {
    let text = document.getElementById("inputText").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
    document.getElementById("inputText").value = "";
   
}

function copiarTexto() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    //alert("Texto copiado al portapapeles");
}
