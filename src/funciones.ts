function suma(a: number, b: number) {
  return a + b;
}

// Funciones Flecha
const multiplica = (a: number, b: number) => a * b;

interface Rectangulo {
  base: number;
  altura: number;
  superficie: number;
}

const obtenRectangulo = (base: number, altura: number): Rectangulo => ({
  base,
  altura,
  superficie: base * altura,
});

const miRectangulo = obtenRectangulo(10, 20)
