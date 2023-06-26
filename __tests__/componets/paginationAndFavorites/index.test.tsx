import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Pagination } from "@/components/PaginationAndFavorites";

describe("header component", () => {
  it("teste renders text, ", () => {
    render(<Pagination />);
    const Text = "Seus Pokemons favoritos";
    const btnClean = screen.getByText("Limpar pesquisa");
    expect(screen.getByText(Text)).toBeInTheDocument();
    expect(btnClean).toBeInTheDocument();
  });

  it("should render a button and handle click event", () => {
    render(<Pagination />);
    const btnClean = screen.getByText("Limpar pesquisa");
    expect(btnClean).toBeInTheDocument();

    fireEvent.click(btnClean);
  });
});
