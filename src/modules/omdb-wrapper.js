import axios from"axios";
const APIKEY ="99758c2b";

const OMDBSearchByPage = async (searchText,page=1)=> {

    let returnObject = { 
        respuesta :false,
        cantidadTotal:0, 
        datos :{}
    };
    let requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`
    const apiResponse = await axios.get(requestString);
    //console.log ('apiResponse', apiResponse.data);
    returnObject.respuesta = apiResponse.data.Response
    returnObject.datos = apiResponse.data.Search
    return  returnObject; 
};

export {OMDBSearchByPage};