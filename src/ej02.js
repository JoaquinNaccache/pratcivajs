import {PI, sumar, multiplicar, alumnos} from './modules/matematica.js';
let total;
let total2;
let alumno;
let num1=1;
let num2=2; 
let nombre1="Roni";
let nombre2="Joaco";
let nombre3="Ulises";
let nombre4="Gajer";
console.clear();
console.log(`La constante PI vale '${PI}'`);
total=sumar(num1,num2); 
total2=multiplicar(num1,num2)
alumno=alumnos(nombre1,nombre2,nombre3,nombre4);
console.log(`sumar(${num1}+${num2})= ${total}`); 
console.log(`multiplicar(${num1}*${num2})=${total2}`);
console.log(`${nombre1}+${nombre2}+${nombre3}+${nombre4}`);
for(let i=0;i<=4;i++){
    console.log(alumno[i])
}
