
class alumno {
  constructor(nombre, dni, edad) {
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
  }

  toString() {
    return `nombre: ${this.nombre}, DNI: ${this.dni}, Edad: ${this.edad}`;
  }
}
export default alumno;