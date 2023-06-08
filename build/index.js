"use strict";
const buscarPersonaje = (id) => {
    console.log(`Buscando personaje ${id}`);
    const baseUrl = "https://swapi.dev/api/";
    const url = `${baseUrl}people/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
        const { name } = data;
        const miSpan = document.querySelector("span#info");
        if (!miSpan)
            return;
        miSpan.innerText = name;
    })
        .catch((error) => console.error(error));
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
if (miBoton) {
    miBoton.onclick = (event) => { };
    miBoton.onmouseover = (event) => {
        console.log("estoy haciendo hover");
        miBoton.style.backgroundColor = "yellow";
    };
    miBoton.onmouseleave = (event) => {
        console.log("estoy haciendo hover");
        miBoton.style.backgroundColor = "transparent";
    };
}
miInput === null || miInput === void 0 ? void 0 : miInput.addEventListener("keydown", (event) => { });
//# sourceMappingURL=index.js.map