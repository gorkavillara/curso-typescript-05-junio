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
//# sourceMappingURL=index.js.map