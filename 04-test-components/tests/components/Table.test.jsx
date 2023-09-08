import { render } from "@testing-library/react";
import Table from "../../src/components/Table";

describe("Captura del componente Tabla.jsx", () => {
  it("Fotico:", () => {
    let { container } = render(<Table />);
    expect(container).toMatchSnapshot();
  });
});
