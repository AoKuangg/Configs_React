import { render } from "@testing-library/react";
import Table from "../../src/components/Table";

describe("Captura del componente Tabla.jsx", () => {
  it("Fotico:", () => {
    let nom = "Zzz"
    let { container, getByText } = render(<Table />);
    // expect(getByText("Zzz").innerHTML).toBe(nom)
    expect(getByText("Zzz")).toBeTruthy()
    // let h1 = container.querySelector("h1");
    // console.log(h1.outerHTML);
    // expect(container).toMatchSnapshot();
  });
});
