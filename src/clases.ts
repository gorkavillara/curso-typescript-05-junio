/**
 * Clase coche, con parámetros marca, modelo y kilometros
 */
export class Coche {
  marca: string
  modelo: string
  kilometros: number

  constructor (m: string, mo: string, km: number) {
    this.marca = m
    this.modelo = mo
    this.kilometros = km
  }

  /**
   *
   * @param numVeces Número de veces que se va a loguear el brumbrum
   */
  hazRuido (numVeces: number) {
    for (let i = 0; i < numVeces; i++) {
      console.log("Brumbrum")
    }
  }
}
