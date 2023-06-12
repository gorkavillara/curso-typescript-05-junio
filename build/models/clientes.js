class Cliente {
    constructor(id, n, e) {
        this.id = id;
        this.nombre = n;
        this.email = e;
        this.activo = true;
    }
    desactivaCliente() {
        this.activo = false;
    }
    static definicion() {
        console.log("Un cliente es un activo valioso para las empresas");
    }
}
Cliente.tipo = "cliente";
Cliente.definicion();
Cliente.tipo;
export { Cliente };
//# sourceMappingURL=clientes.js.map