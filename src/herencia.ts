class Persona {
    protected nombre: string
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

class Alumno extends Persona {
    private _lenguajeFavorito: "Typescript"

    constructor(n: string, e: number, l: "Typescript") {
        super(n, e)
        this._lenguajeFavorito = l
    }

    diTuNombre() {
        console.log(`Mi nombre es ${this.nombre} y mi lenguaje favorito es ${this._lenguajeFavorito}`)
    }

}

const miAlumno = new Alumno("Javier", 24, "Typescript")

miAlumno.diTuNombre()

const miPersona = new Persona("Isabel", 25)

miPersona.diTuNombre()