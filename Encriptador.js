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
    ocultarImagen();
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
    ocultarImagen();
    return;
   
}
function copiarTexto() {
    let outputText = document.getElementById("SalidaTexto");
    outputText.select();
    document.execCommand("copy");
    limpiar();
    PonerImagen();
    //alert("Texto copiado al portapapeles");
    return;
}
function limpiar(){
    document.querySelector('#SalidaTexto').value = '';
    return;
}
function ocultarImagen() {
    let imagen = document.getElementById("Muñeco");
    if (imagen) {
        imagen.style.display = 'none';
    }
}
function PonerImagen() {
    let imagen = document.getElementById("Muñeco");
    if (imagen) {
        imagen.style.display = 'block';
    }
}