import {OMDBSearchByPage} from './modules/omdb-wrapper.js'


let resultado = await OMDBSearchByPage("cars", 1);
//let resultado = OMDBSearchByPage("cars";
console.log(' resultado', resultado);
