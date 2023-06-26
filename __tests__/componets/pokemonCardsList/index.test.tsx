import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PokemonsCardList } from "@/components/PokemonCardsList";
import { IPokemonCardList } from "@/interfaces/listPokemons";

jest.mock("next/navigation");

describe("PokemonsCardList", () => {
  const mockProps: IPokemonCardList = {
    id: 1,
    image: "pokemon.jpg",
    name: "bulbasaur",
    types: [
      { slot: 1, type: { name: "grass", url: "grass-url" } },
      { slot: 2, type: { name: "poison", url: "poison-url" } },
    ],
  };

  it("should render the component correctly", () => {
    render(<PokemonsCardList {...mockProps} />);

    expect(screen.getByText("N: 1")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("Grass")).toBeInTheDocument();
    expect(screen.getByText("Poison")).toBeInTheDocument();
  });
});
