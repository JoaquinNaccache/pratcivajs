    import fs from 'fs'
    const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
    const ARCHIVO_SALIDA = "./archivo-salida.txt";
    const data = fs.readFileSync("./archivo-entrada.txt", "utf-8");
    console.log(data);
    const nuevo = fs.writeFileSync("./archivo-salida.txt", "utf-8");
    console.log(nuevo);
    

