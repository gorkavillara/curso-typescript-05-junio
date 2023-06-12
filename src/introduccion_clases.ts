interface TAnimal {
  nombre: string,
  especie: string,
  numPatas: number,
  hazRuido: () => void
}

class Animal implements TAnimal {
  especie: string
  nombre: string
  numPatas: number

  constructor(nombre: string, especie: string, numPatas: number = 2) {
      this.nombre = nombre
      this.especie = especie
      this.numPatas = numPatas
  }

  hazRuido() {
      console.log("Estoy haciendo mi sonido característico")
  }
}

const miAnimal: TAnimal = {
  nombre: "Mojito",
  especie: "Agaporni",
  numPatas: 2,
  hazRuido: function() {
      console.log(this.nombre + this.especie)
  }
}

const miOtroAnimal = new Animal("Kenya", "Perro", 4)

miOtroAnimal.hazRuido()

console.log(miOtroAnimal)

export {}
