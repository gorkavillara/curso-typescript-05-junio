type Color = "Rojo" | "Azul" | "Amarillo" | "Verde"

interface Forma {
    nombre: string
    color: Color
    base: number
    altura: number
}

const miForma: Forma = {
    nombre: "cuadrado",
    color: "Rojo",
    base: 5,
    altura: 5
}

function obtenArea(forma: Forma): number {
    // const base = forma.base
    // const altura = forma.altura
    const { base, altura } = forma

    return base * altura
}

const miArea = obtenArea(miForma)

console.log(`El área de mi forma es ${miArea}`)

interface Alumno {
    nombre: string
    edad: number
}

const alumnos: Alumno[] = [{
    nombre: "Gorka",
    edad: 25
}, {
    nombre: "Aitor",
    edad: 22
}, {
    nombre: "Álvar",
    edad: 25
}]

console.table(alumnos)

console.error("Esto es un error")

console.time("timer")
for (let i = 0; i < 123456789; i++) {
    let a = 0
}
console.timeEnd("timer")