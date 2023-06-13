/**
 *
 * @param sumando1 Primer número de la suma
 * @param sumando2 Segundo número de la suma
 * @returns La suma de sumando1 + sumando2
 */
function suma (sumando1: number, sumando2: number): number {
  return sumando1 + sumando2
}

/**
 *
 * @param factor1 Primer factor de la multiplicación
 * @param factor2 Segundo factor de la multiplicación
 * @returns El producto de la multiplicación del primer factor por el segundo factor
 */
function multiplica (factor1: number, factor2: number): number {
  return factor1 * factor2
}

/**
 *
 * @param nombre El nombre indicado
 * @param numero El orden de ese nombre
 * @returns Una cadena de caracteres indicando el orden de este nombre
 */
function devuelveNombreConNumero (nombre: string, numero: number): string {
  return `${numero}. ${nombre}`
}

export { suma, multiplica, devuelveNombreConNumero }
