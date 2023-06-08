"use strict";
const buscarPersonaje = (id) => {
    console.log(`Buscando personaje ${id}`);
    const baseUrl = "https://swapi.dev/api/";
    const url = `${baseUrl}people/${id}`;
};
// const miBoton = document.getElementById("boton-click2")
const miBoton = document.querySelector("button#boton-click");
// const miInput = document.getElementById("input-num") as HTMLInputElement | null
const miInput = document.querySelector("input[name=numPersonaje]");
// console.log(miBoton)
miBoton === null || miBoton === void 0 ? void 0 : miBoton.addEventListener("click", (event) => {
    if (!miInput)
        return;
    if (!miInput.value)
        return;
    // Aquí gestionamos el evento
    console.log(miInput.value);
    // Hacer la llamada a SWAPI
    buscarPersonaje(miInput.value);
});
miInput === null || miInput === void 0 ? void 0 : miInput.addEventListener("keydown", (event) => {
});
//# sourceMappingURL=index.js.map