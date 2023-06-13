interface Persona {
    readonly nombre: string
    edad: number
}

interface Alumno extends Persona {
    esDesarrollador?: boolean
}

const miPersona: Persona = {
    edad: 10,
    nombre: "Iñigo"
}

const miAlumno: Alumno = {
    nombre: "Inés",
    edad: 22
}

// miAlumno.nombre = "Gorka"

console.log({ miAlumno })