const buscarPersonaje = (id: string) => {
    console.log(`Buscando personaje ${id}`)
    const baseUrl = "https://swapi.dev/api/"
    const url = `${baseUrl}people/${id}`
}


// const miBoton = document.getElementById("boton-click2")
const miBoton = document.querySelector("button#boton-click") as HTMLButtonElement | null
// const miInput = document.getElementById("input-num") as HTMLInputElement | null
const miInput = document.querySelector("input[name=numPersonaje]") as HTMLInputElement | null

// console.log(miBoton)

miBoton?.addEventListener("click", (event) => {
    if (!miInput) return
    if (!miInput.value) return

    // Aquí gestionamos el evento
    console.log(miInput.value)
    // Hacer la llamada a SWAPI
    buscarPersonaje(miInput.value)
})


miInput?.addEventListener("keydown", (event) => {
})