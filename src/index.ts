const numero = Math.random()

if (numero > 0.5) {
    // console.log("El número " + numero + " es mayor que 0.5")
    console.log(`El número ${numero} es mayor que 0.5`)
} else if (numero > 0.3) {
    console.log("El número es mayor que 0.3 pero menor que 0.5")
} else {
    console.log("El número es menor que 0.3")
}

console.log(numero)

interface Alumno {
    nombre: string
    nota: number
    esDesarrollador: boolean
}

const miAlumno: Alumno = {
    nombre: "Guillermo",
    esDesarrollador: false,
    nota: Math.ceil(Math.random() * 3 + 7),
}

console.log(miAlumno.nota)

switch (miAlumno.nota) {
    case 10:
        console.log("Excelente!!")
        break
    case 9:
        console.log("Muy bien!")
        break
    case 8:
        console.log("Bien hecho")
        break
    default:
        console.log("No se sabe")
        break
}

const alumnas: Alumno[] = [{
    esDesarrollador: true,
    nombre: "Sandra M",
    nota: Math.ceil(Math.random() * 10)
}, {
    esDesarrollador: true,
    nombre: "Sandra C",
    nota: Math.ceil(Math.random() * 10)
}, {
    esDesarrollador: true,
    nombre: "Isabel",
    nota: Math.ceil(Math.random() * 10)
}]

for (let i = 0; i < alumnas.length; i++) {
    console.log(`La alumna ${alumnas[i].nombre} ${alumnas[i].nota >= 5 ? "ha aprobado" : "NO ha aprobado"}`)
}

// for..of => para ARRAYS
for (let alumna of alumnas) {
    console.log(`La alumna ${alumna.nombre} ${alumna.nota >= 5 ? "ha aprobado" : "NO ha aprobado"}`)
}

// for..in => para Objetos
for (let property in miAlumno) {
    console.log(property)
    // console.log(alumnas[property])
    // console.log(miAlumno.property) // ❌
    console.log(miAlumno[property])
}

alumnas.forEach((alumna, index, arrayOriginal) => {
    console.log(alumna)
    console.log(index)
    console.log(arrayOriginal)
})

function miFuncion(params: any[]) {}
type Avion = {
    marca: string
}

const miConstFuncion = (params: any[]): boolean => true

const convierteAlumnoEnAvion = (alumno: Alumno): Avion => {
    return {
        marca: "Airbus"
    }
}

const alumnasAprobadas = alumnas.filter((alumna) => alumna.nota >= 5)

console.log(alumnasAprobadas.length)
console.log(alumnasAprobadas)

const alumnasConvertidas = alumnas.map((alumna) => {
    // return {
    //     nombre: alumna.nombre,
    //     nota: alumna.nota,
    //     esDesarrolador: alumna.esDesarrollador,
    //     lenguajeFavorito: "Typescript"
    // }
    return {
        ...alumna,
        lenguajeFavorito: "Typescript"
    }
})

console.log(alumnasConvertidas)

const algunaAprobada = alumnas.some(alumna => alumna.nota >= 5)
console.log(algunaAprobada)

const todasAprobadas = alumnas.every(alumna => alumna.nota >= 5)
console.log(todasAprobadas)

const alumnaIsabel = alumnas.find(alumna => alumna.nombre === "Isabel")
console.log(alumnaIsabel)

const alumnasOrdenadas = alumnas.sort((a, b) => {
    if (a.nota > b.nota) return -1
    return 1
})

console.log(alumnasOrdenadas)

const esMayorQueCinco = (numero: number): string => {
    if (numero <= 5) return "No es mayor"

    return "Sí es mayor"
}

let condicion = true

while (condicion) {
    console.log("Se ejecuta solo una vez")
    condicion = false
}

condicion = false

do {
    console.log("Esto lo va a ejecutar siempre, por lo menos una vez")
} while(condicion)

while (true) {
    const miNumeroAleatorio = Math.random()
    if (miNumeroAleatorio < 0.3) {
        continue
    }
    console.log(miNumeroAleatorio)
    if (miNumeroAleatorio > 0.9) {
        // Sal de aquí
        break
    }
}
