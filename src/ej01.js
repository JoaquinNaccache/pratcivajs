let text1= "chicago";
let text2= "atlanta";
let textSalida;

textSalida= concatInvert(text1, text2);
console.clear();
console.log(`Textos de entrada: "${text1}" y "${text2}"`);
console.log(`Texto de salida: ${textSalida}"`);

function concatInvert(text1,text2)
{
    let textConcat=text1 + text2;
    let separarString=textConcat.split("");
    let invertirString=separarString.reverse();
    let unirArreglo=invertirString.join("");
    return unirArreglo;
}
