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