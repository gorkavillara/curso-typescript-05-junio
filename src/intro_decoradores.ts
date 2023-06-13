function miDecoradorDeClase(constructor: Function) {
  // Lo que queramos con el constructor
  constructor.prototype.esDesarrollador = true;
}

// const objeto = {
//     id: 2,
//     nombre: "Cubo"
// }

// const key = "id"
// objeto[key]

// Decorador de método
function logueaNombreMetodo(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const funcionOriginal = target[methodName];

  function funcionConLog(this: any) {
    console.log(`Estamos ejecutando el método ${methodName}`);
    funcionOriginal.apply(this);
  }

  target[methodName] = funcionConLog;

  return target;
}

function miDecoradorDePropiedad(target: any, nombreDeLaPropiedad: string) {
  console.log({ constructor: target.constructor });
  console.log(
    `El nombre de la clase es: ${
      typeof target === "function" ? target.name : target.constructor.name
    }`
  );
  console.log(`El nombre de la propiedad es: ${nombreDeLaPropiedad}`);
}

function miDecoradorDeParametro(
  target: any,
  nombreDelMetodo: string,
  parameterIndex: number
) {
  console.log(
    `Clase: ${target}, Método: ${nombreDelMetodo}, Índice del parámetro: ${parameterIndex}`
  );
}

function factoriaDecorador(mensaje: string) {
    return function decorador(target: any, propiedad: string) {
        console.log(mensaje)
        console.log(propiedad)
    }
}

// @miDecoradorDeClase
class Alumno {
  @miDecoradorDePropiedad
  nombre: string;
  @factoriaDecorador("Hola desde la factoría")
  esDesarrollador?: boolean;

  @miDecoradorDePropiedad
  static tipo = "Tipo Alumno";

  constructor(n: string) {
    this.nombre = n;
  }

  //   @logueaNombreMetodo
  diTuNombre() {
    console.log(`Mi nombre es ${this.nombre}`);
  }

  ordenaTuNombre(@miDecoradorDeParametro num: number) {
    console.log(`${num}. ${this.nombre}`);
  }
}

const miAlumno = new Alumno("Gorka");

// console.log({ miAlumno });
// console.log(miAlumno.esDesarrollador);

miAlumno.diTuNombre();

// miAlumno.ordenaTuNombre(12);

// console.log(Alumno.tipo)
