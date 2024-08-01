const TextoEntrada = document.querySelector(".IntroducirTexto");
const TextoSalida = document.querySelector(".SalidaTexto");

function BotonEncriptar(){
    const TextoEncriptado = Encriptar(TextoEntrada.value)
    TextoSalida.value = TextoEncriptado 
    TextoEntrada.value = "";
    TextoSalida.style.backgroundImage = "none";                                                                      
}

function Encriptar(stringE){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringE = stringE.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringE.includes(matriz[i][0])){
            stringE = stringE.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return stringE;
}

function BotonDesencriptar(){
    const TextoEncriptado = Desencriptar(TextoEntrada.value);
    TextoSalida.value = TextoEncriptado;
    TextoEntrada.value = "";
    TextoSalida.style.backgroundImage = "none";                                                                        
}

function Desencriptar(stringD){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringD = stringD.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringD.includes(matriz[i][1])){
            stringD = stringD.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return stringD;
}
function BotonCopiar() {
    TextoSalida.select();
    document.execCommand("copy");
    TextoSalida.style.backgroundImage = "url('Muñeco.png')";
    TextoSalida.value = "";
}