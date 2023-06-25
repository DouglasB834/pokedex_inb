"use client";
import { usePokemon } from "@/context";
import { useState } from "react";

export const Header = () => {
  const { searchPokemonByName } = usePokemon();
  const [pokemon, setPokemon] = useState<string>("");

  const handleSearch = (event: string) => {
    setPokemon(event);
  };
  const onSearchButtom = () => {
    searchPokemonByName(pokemon.toLocaleLowerCase());
  };

  return (
    <div className="container-header ">
      <header className="tag-header">
        <a className="tag-logo" href="/">
          Pokedex INB
        </a>

        <div>
          <div className="input-container">
            <input
              placeholder="Procurando por algum pokémon?"
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
            />

            <button className="search" onClick={onSearchButtom}>
              🔍
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
