class Cliente {
    static tipo = "cliente"
    id: number
    nombre: string
    email: string
    activo: boolean

    constructor(id: number, n: string, e: string) {
        this.id = id
        this.nombre = n
        this.email = e
        this.activo = true
    }

    desactivaCliente() {
        this.activo = false
    }

    static definicion() {
        console.log("Un cliente es un activo valioso para las empresas")
    }
}

Cliente.definicion()
Cliente.tipo

export { Cliente }