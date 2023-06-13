type Persona = {
    nombre: string,
    edad: number
}

type Alumno = {
    esDesarrollador: boolean
}

type AlumnoDesarrollo = Persona & Alumno

// const miAlumno: AlumnoDesarrollo = {

// }

export {}