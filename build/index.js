"use strict";
class Animal {
    constructor(nombre, especie, numPatas = 2) {
        this.nombre = nombre;
        this.especie = especie;
        this.numPatas = numPatas;
    }
    hazRuido() {
        console.log("Estoy haciendo mi sonido característico");
    }
}
const miAnimal = {
    nombre: "Mojito",
    especie: "Agaporni",
    numPatas: 2,
    hazRuido: function () {
        console.log(this.nombre + this.especie);
    }
};
const miOtroAnimal = new Animal("Kenya", "Perro", 4);
miOtroAnimal.hazRuido();
console.log(miOtroAnimal);
//# sourceMappingURL=index.js.map