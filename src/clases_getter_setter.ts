class Persona {
    private nombre: string
    protected edad: number

    constructor(n: string, e: number) {
        this.nombre = n
        this.edad = e
    }

    diTuNombre() {
        console.log(`Mi nombre es ${this.nombre}`)
    }

    get nombreYEdad() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`
    }

    set nuevoNombre(n: string) {
        this.nombre = n
    }
}

const miAmigo = new Persona("Aitor", 22)
// miAmigo.nuevoNombre("Julen")
miAmigo.nuevoNombre = "Julen"

miAmigo.diTuNombre()

const miNombreYEdad = miAmigo.nombreYEdad

console.log(miNombreYEdad)

console.log(miAmigo.nombreYEdad)
// console.log(miAmigo.edad) // Property 'edad' is protected

export {}