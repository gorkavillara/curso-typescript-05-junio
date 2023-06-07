"use strict";
const misNumeros = [1, 2, 3, 4, 5, 6];
const elDoble = misNumeros.map((numero) => numero * 2);
console.log(elDoble);
const devuelveElDobleDelNumero = (numero) => 2 * numero;
const otroDoble = misNumeros.map(devuelveElDobleDelNumero);
console.log(otroDoble);
// Sobrecarga de funciones
// const sumar = (a: number, b: number) => a + b
const sumar = (...params) => {
    // console.log(params)
    // let suma = 0
    // params.forEach(param => )
    const nuevoValor = params.reduce((valorAcumulado, valorActual) => valorAcumulado + valorActual, 0);
    console.log(nuevoValor);
    return nuevoValor;
};
//# sourceMappingURL=index.js.map