
var botonEncriptar = document.querySelector(".btn-encriptar"); //btn-encriptar
var botonDesencriptar = document.querySelector(".btn-desencriptar"); //btn-desencriptar
var munieco = document.querySelector(".contenedor-m"); //id="muñeco"    Dudoso,
var contenedor = document.querySelector(".mensaje-encriptado"); //class="mensaje-encriptado"
var resultado = document.querySelector(".texto-resultado"); //ya existe

botonEncriptar.onclick = encriptar; 
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
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

// function encriptar() {
//     let texto = document.getElementById("texto").value;
//     let tituloMensaje = document.getElementById("titulo-mensaje");
//     let parrafo = document.getElementById("parrafo");
//     let muñeco = document.getElementById("muñeco");
  
//     let textoCifrado = texto
//       .replace(/e/gi, "enter")
//       .replace(/i/gi, "imes")
//       .replace(/a/gi, "ai")
//       .replace(/o/gi, "ober")
//       .replace(/u/gi, "ufat");
  
//     if (texto.length != 0) {
//       document.getElementById("texto").value = textoCifrado;
//       tituloMensaje.textContent = "Texto encriptado con éxito";
//       parrafo.textContent = "";
//       muñeco.src = "./img/encriptado.jpg";
//     } else {
//       muñeco.src = "./img/muñeco.png";
//       tituloMensaje.textContent = "Ningún mensaje fue encontrado";
//       parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
//       swal("Ooops!", "Debes ingresar un texto", "warning");
//     }
//   }
  
//   function desencriptar() {
//     let texto = document.getElementById("texto").value;
//     let tituloMensaje = document.getElementById("titulo-mensaje");
//     let parrafo = document.getElementById("parrafo");
//     let muñeco = document.getElementById("muñeco");
  
//     let textoCifrado = texto
//       .replace(/enter/gi, "e")
//       .replace(/imes/gi, "i")
//       .replace(/ai/gi, "a")
//       .replace(/ober/gi, "o")
//       .replace(/ufat/gi, "u");
    
//       if (texto.length != 0) {
//         document.getElementById("texto").value = textoCifrado;
//         tituloMensaje.textContent = "Texto desencriptado con éxito";
//         parrafo.textContent = "";
//         muñeco.src = "./img/desencriptado.jpg";
//       } else {
//         muñeco.src = "./img/muñeco.png";
//         tituloMensaje.textContent = "Ningún mensaje fue encontrado";
//         parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
//         swal("Ooops!", "Debes ingresar un texto", "warning");
//       }
//   }



















// var botonEncriptar = document.querySelector(".btn-encriptar"); //btn-encriptar
// var botonDesencriptar = document.querySelector(".btn-desencriptar"); //btn-desencriptar
// var munieco = document.querySelector(".contenedormunieco"); //id="muñeco"    Dudoso,
// var contenedor = document.querySelector(".contenedor-parrafo"); //class="mensaje-encriptado"
// var resultado = document.querySelector(".texto-resultado"); //ya existe

// botonEncriptar.onclick = encriptar; 
// botonDesencriptar.onclick = desencriptar;

// function encriptar(){
//     ocultarAdelante();
//     var cajatexto = recuperarTexto()
//     resultado.textContent = encriptarTexto(cajatexto);
// }

// function desencriptar(){
//     ocultarAdelante();
//     var cajatexto = recuperarTexto()
//     resultado.textContent = desencriptarTexto(cajatexto);
// }

// function recuperarTexto(){
//     var cajatexto = document.querySelector(".cajatexto") //.texto , refiere a textarea
//     return cajatexto.value
// }

// function ocultarAdelante(){
//     munieco.classList.add("ocultar");
//     contenedor.classList.add("ocultar");
// }

// function encriptarTexto(mensaje){
//     var texto = mensaje;
//     var textoFinal = "";

//     for(var i = 0; i < texto.length; i++){
//         if(texto[i] == "a"){
//             textoFinal = textoFinal + "ai"
//         }
//         else if(texto[i] == "e"){
//             textoFinal = textoFinal + "enter"
//         }
//         else if(texto[i] == "i"){
//             textoFinal = textoFinal + "imes"
//         }
//         else if(texto[i] == "o"){
//             textoFinal = textoFinal + "ober"
//         }
//         else if(texto[i] == "u"){
//             textoFinal = textoFinal + "ufat"
//         }
//         else{
//             textoFinal = textoFinal + texto[i]
//         }
//     }
//     return textoFinal;

// }

// function desencriptarTexto(mensaje){
//     var texto = mensaje;
//     var textoFinal = "";

//     for(var i = 0; i < texto.length; i++){
//         if(texto[i] == "a"){
//             textoFinal = textoFinal + "a"
//             i = i+1;
//         }
//         else if(texto[i] == "e"){
//             textoFinal = textoFinal + "e"
//             i = i+4;
//         }
//         else if(texto[i] == "i"){
//             textoFinal = textoFinal + "i"
//             i = i+3;
//         }
//         else if(texto[i] == "o"){
//             textoFinal = textoFinal + "o"
//             i = i+3;
//         }
        
//         else if(texto[i] == "u"){
//             textoFinal = textoFinal + "u"
//             i = i+3;
//         }
//         else{
//             textoFinal = textoFinal + texto[i];
//         }
        
//     }

//     return textoFinal;

// }

// const btnCopiar = document.querySelector(".btn-copiar"); 
//     btnCopiar.addEventListener("click", copiar = () => {
//     var contenido = document.querySelector(".texto-resultado").textContent;
//     navigator.clipboard.writeText(contenido);
//     console.log("hola"); 
// });
