

const parsearUrl = (datos) => {
    try {
    let miUrl = new URL(datos);
    let host = miUrl.host;
    let pathname = miUrl.pathname;
    let searchParams = miUrl.searchParams;
    return {
    host,
    pathname,
    parametros: searchParams
    };
    } catch (error) {
    console.error("Error al parsear la URL:", error.message);
    return {
    host: null,
    pathname: null,
    parametros: {}
    };
    }
    };
    
    let MiObjeto = parsearUrl("https://nodejs.org/api/url.html#the-whatwg-url-api");
    console.log(MiObjeto);
