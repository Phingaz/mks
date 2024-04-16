import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FooterComponent from "../Footer";

describe("Footer", () => {
  it("should render Footer", () => {
    render(<FooterComponent />);

    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("should render a specific text", () => {
    render(<FooterComponent />);

    const text = screen.getByText(
      "MKS sistemas © Todos os direitos reservados"
    );
    expect(text).toBeInTheDocument();
  });
});
