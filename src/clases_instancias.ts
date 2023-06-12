type TForma = "Triángulo" | "Cuadrado" | "Rectángulo"

class Forma {
    tipo: TForma
    base: number
    altura: number

    constructor(t: TForma, b: number, a: number) {
        this.tipo = t
        this.base = b
        this.altura = a
    }

    obtenArea() {
        if (this.tipo === "Triángulo") return this.base * this.altura / 2
        return this.base * this.altura
    }
}
class Persona {
    nombre: string
    constructor(n: string) {
        this.nombre = n
    }
}

const miForma = new Forma("Rectángulo", 10, 5)

console.log(miForma.obtenArea())

const miVariable = "hola mundo"

console.log(typeof miVariable)
console.log(typeof miForma)

console.log(miForma instanceof Forma)

function devuelveId(instancia: Forma | Persona) {
    if (instancia instanceof Persona) return instancia.nombre
    return instancia.tipo
}

export {}