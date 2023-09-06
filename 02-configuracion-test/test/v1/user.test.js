import { saludar } from "../../version/v1/user"

describe("Test del archivo user.js",()=>{
    test('la funcion saludar devuelve "Hola Mundo"', () => {
        expect(saludar()).toBe("Hola Mundo")
    });
    test('Devuelve un string', () => {
        expect(typeof saludar()).toBe("string")
    })
})
