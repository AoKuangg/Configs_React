import { saludo } from "../../Api/prueba"

describe("Test del archivo prueba.js",()=>{
    it("La funcion devuelve un 'Hello World'",()=>{
        expect(saludo()).toBe("Hello World")
    })
})