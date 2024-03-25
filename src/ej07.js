import { getCountryByAbbreviation   } from 'currency-map-country';
let monedaDelPais,codigoPais;
codigoPais='AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es:${monedaDelPais}`);

codigoPais='UZA';
monedaDelPais=obtenerMoneda(codigoPais);
console.log(`Lamonedadelpaís${codigoPais}es:${monedaDelPais}`);

function obtenerMoneda(codigoPais){
    let retorno = null;
    try{
        retorno = getCountryByAbbreviation    (codigoPais);
    } catch(err){
        console.log(err.message)
    }
    console.log('retorno:', retorno);
    return retorno;
}