import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "@/components/Header/header";

describe("header component", () => {
  it("teste renders text logo, Pokedex INB", () => {
    render(<Header />);
    const titleLogo = "Pokedex INB";
    expect(screen.getByText(titleLogo)).toBeInTheDocument();
  });
});

describe("header component", () => {
  it("should render an input element", () => {
    render(<Header />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Procurando por algum pokémon?")
    ).toBeInTheDocument();
  });
});
