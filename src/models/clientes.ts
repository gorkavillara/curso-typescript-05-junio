import axios from "axios"

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

    static async obtenClientes(): Promise<Cliente[]> {
        const url = "https://97ebb3ca3281.ngrok.app/clients"
        const data = { action: "get" }
        const clientes = await axios.post(url, data)
        // console.log(clientes.data)
        return clientes.data
    }
}

Cliente.definicion()
Cliente.tipo

export { Cliente }