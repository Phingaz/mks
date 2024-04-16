import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "../Header";

describe("Header", () => {
  it("should render Header", () => {
    render(<HeaderComponent />);

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("should render a specific text", () => {
    render(<HeaderComponent />);

    const MKS = screen.getByText("MKS");
    const text = screen.getByText("Sistemas");
    expect(MKS && text).toBeInTheDocument();
  });
});
