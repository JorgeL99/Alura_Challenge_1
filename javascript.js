
var botonEncriptar = document.querySelector(".btn-encriptar"); 
var botonDesencriptar = document.querySelector(".btn-desencriptar"); 
var munieco = document.querySelector(".contenedor-m"); 
var contenedor = document.querySelector(".mensaje-encriptado"); 
var resultado = document.querySelector(".texto-resultado"); 
var texto = document.querySelector(".texto");
botonEncriptar.onclick = encriptar; 
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
    texto.value = '';
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".texto") //.texto , refiere a textarea
    return cajatexto.value
}

function encriptarTexto(mensaje) {
    if (mensaje === "") {
      swal("Ooops!", "Debes ingresar un texto", "warning");
      return "";
    }
  
    var texto = mensaje;
    var textoFinal = "";

    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }

    return textoFinal;
  }


function desencriptarTexto(mensaje){
    if (mensaje === "") {
        swal("Ooops!", "Debes ingresar un texto", "warning");
        return "";
      }
    var texto = mensaje;
    var textoFinal = "";

    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    
});
