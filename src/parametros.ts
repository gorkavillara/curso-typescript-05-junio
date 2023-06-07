interface Coche {
    readonly marca: string
    modelo: string
    kilometros?: number
}

const miCoche: Coche = {
    marca: "Mercedes",
    modelo: "CLA"
}

miCoche.kilometros = 10000
miCoche.modelo = "Clase C"

const modificaModelo = (coche: Coche): Coche => {
    return {
        marca: coche.marca,
        modelo: "Mi Modelo",
        kilometros: coche.kilometros
    }
}

const miOtroCoche = modificaModelo(miCoche)

// console.log("miCoche", miCoche)
// console.log({ miCoche })
// console.log({ miOtroCoche })


// Objetos y Arrays se pasan por referencia
// Tipos primitivos se pasan por valor
const modificarKilometraje = (coche: Coche): Coche => {
    // const nuevoCoche = coche // Copia el objeto por referencia
    
    // const nuevoCoche = { ...coche } // Copia superficial

    // const nuevoCoche = JSON.parse(JSON.stringify(coche)) // Copia profunda
    const nuevoCoche = structuredClone(coche) // Copia profunda

    nuevoCoche.kilometros = 20
    return nuevoCoche
}

const nuevoCoche = modificarKilometraje(miCoche)

console.log({ nuevoCoche })
console.log({ miCoche })