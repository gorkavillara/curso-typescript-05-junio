"use strict";
const miForma = {
    nombre: "cuadrado",
    color: "Rojo",
    base: 5,
    altura: 5
};
function obtenArea(forma) {
    // const base = forma.base
    // const altura = forma.altura
    const { base, altura } = forma;
    return base * altura;
}
const miArea = obtenArea(miForma);
console.log(`El área de mi forma es ${miArea}`);
const alumnos = [{
        nombre: "Gorka",
        edad: 25
    }, {
        nombre: "Aitor",
        edad: 22
    }, {
        nombre: "Álvar",
        edad: 25
    }];
console.table(alumnos);
console.error("Esto es un error");
console.time("timer");
for (let i = 0; i < 123456789; i++) {
    let a = 0;
}
console.timeEnd("timer");
//# sourceMappingURL=index.js.map