"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function obtenSaludo() {
    // console.log("Hola mundo")
    return "Hola mundo";
}
function recogeLaHabitacion() {
    return __awaiter(this, void 0, void 0, function* () {
        /// Recogiendo la habitación...
        return true;
    });
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
function resuelve(respuesta) {
    console.log(respuesta);
}
const resuelveFlecha = (respuesta) => console.log(respuesta);
recogeLaHabitacion()
    .then((respuesta) => console.log("La respuesta es", respuesta))
    .catch((error) => console.log(error))
    .finally(() => console.log("He sido ejecutado"));
console.log("Seguimos");
const obtenMiRespuesta = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Ejecutando obtener mi respuesta");
    const miRespuesta = yield recogeLaHabitacion();
    console.log(miRespuesta);
});
obtenMiRespuesta();
//# sourceMappingURL=index.js.map