import { getCountryByAbbreviation, getCountry   } from 'currency-map-country';
let monedaDelPais,codigoPais;
codigoPais='UK';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es:${monedaDelPais}`);

codigoPais='UZA';
monedaDelPais=obtenerMoneda(codigoPais);
console.log(`Lamonedadelpaís${codigoPais}es:${monedaDelPais}`);

function obtenerMoneda(codigoPais){
    let ultimo= null;
    let retorno = getCountryByAbbreviation(codigoPais);
    try{
       ultimo = getCountry(retorno);
    } catch(err){
        console.log(err.message)
    }
    console.log('retorno:', ultimo);
    return ultimo;
}