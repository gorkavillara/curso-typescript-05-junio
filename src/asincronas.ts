function obtenSaludo() {
  // console.log("Hola mundo")
  return "Hola mundo";
}

async function recogeLaHabitacion() {
  /// Recogiendo la habitación...
  return true;
}

// const miPromesa = new Promise((res, reject) => {
//     if (seharesuelto) {
//         res("Hola mundo")
//     } else {
//         reject("ERROR")
//     }
// })

const variable = 12;

const miSaludo = obtenSaludo();

console.log(miSaludo);

// const resultado = recogeLaHabitacion()
// console.log(resultado)

function resuelve(respuesta: unknown) {
    console.log(respuesta)
}

const resuelveFlecha = (respuesta: unknown) => console.log(respuesta)

recogeLaHabitacion()
  .then((respuesta) => console.log("La respuesta es", respuesta))
  .catch((error) => console.log(error))
  .finally(() => console.log("He sido ejecutado"))

console.log("Seguimos");

const obtenMiRespuesta = async () => {
    console.log("Ejecutando obtener mi respuesta")
    const miRespuesta = await recogeLaHabitacion()
    console.log(miRespuesta)
}

obtenMiRespuesta()
