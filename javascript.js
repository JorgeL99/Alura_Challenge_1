function encriptar(){
    let texto =  document.getElementById("texto").value;

    let textoCifrado = texto
                            .replace(/e/gi,"enter")
                            .replace(/i/gi,"imes")
                            .replace(/a/gi,"ai")
                            .replace(/o/gi,"ober")
                            .replace(/u/gi,"ufat");


}