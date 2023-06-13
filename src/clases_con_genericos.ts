class Token<TClave extends string | number, TValor> {
    clave: TClave
    valor: TValor

    constructor(c: TClave, v: TValor) {
        this.clave = c
        this.valor = v
    }
}

const miToken = new Token(123456, true)

// TS -> lenguaje
// Vue3 -> librería
// Nuxt -> framework