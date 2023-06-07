const lanzaErrorSiMenorQueCinco = (valor: number) => {
    if (valor < 5) {
        // lanza error
        throw new Error("El valor introducido es menor que cinco")
    }
    return true
}
try {
    lanzaErrorSiMenorQueCinco(3)
    ///
} catch(err) {
    // Hacemos lo que queramos con este error
    console.log("Ha habido un error", err)
}