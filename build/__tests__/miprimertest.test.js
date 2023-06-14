"use strict";
//@ts-ignore
const factorial = (num) => {
    if (num < 0)
        throw new Error("No es posible calcular el factorial de números negativos");
    let fact = 1;
    for (let i = num; i > 0; i--) {
        fact *= i;
    }
    return fact;
};
test("Mi primer test", () => {
    // Testeamos lo que queramos
    expect(5).toBeGreaterThan(2);
});
describe("Testeando Factorial", () => {
    it("Factorial cumple", () => {
        // Testeamos lo que queramos también
        // console.log(factorial(5))
        expect(factorial(5)).toBe(120);
    });
    it("Factorial no funciona con negativos", () => {
        expect(() => factorial(-5)).toThrow();
    });
});
//# sourceMappingURL=miprimertest.test.js.map