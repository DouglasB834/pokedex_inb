import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Pokemon from "@/app/pokemon/page";
import { UseContextPokemonProvider } from "@/context";

jest.mock("next/navigation");

describe("must fetch the correct id and render the correct data", () => {
  const searchParams = { id: 1 };

  it("should render the component correctly", () => {
    render(
      <UseContextPokemonProvider>
        <Pokemon searchParams={searchParams} />
      </UseContextPokemonProvider>
    );

    expect(screen.getByText("CP")).toBeInTheDocument();
    expect(screen.getByTitle("Voltar")).toBeInTheDocument();
  });
});
