function miFuncion(a: number, b: number, c: number = 2) {
    return a + b + c
}

interface Usuario {
    username: string
    password: string
    id: number | string
}

const miUsuario: Usuario = {
    username: "",
    password: "",
    id: 12
}

interface UsuarioConIdString {
    username: string
    password: string
    id: string
}
interface UsuarioConIdNumber {
    username: string
    password: string
    id: number
}

interface IUsuario<TypeID extends string | number> {
    username: string
    password: string
    id: TypeID
}

const miNuevoUsuario: IUsuario<string> = {
    username: "",
    password: "",
    id: "true"
}

interface ParClaveValor<TClave, TValor = TClave> {
    key: TClave,
    value: TValor
}

const miPar: ParClaveValor<string> ={
    key: "1",
    value: "2"
}

interface MiInterfaz<Primero = string, Segundo = Primero, Tercero = Primero, Cuarto = Primero> {

}