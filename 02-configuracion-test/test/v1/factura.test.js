import { obtener } from "../../version/v1/factura";
describe("test obtener",()=>{
    let obj = {
        id: 1,
        nombre: "Juan"
    };
    let app= obtener()
    test("El obejto esperado {...id, ...nombre}",()=>{
        expect(app).toStrictEqual(obj);
    });
    test("Se espera un 'object'",()=>{
        expect(typeof app).toBe("object");
    })
})
