"use client";
import { usePokemon } from "@/context";
import { StyledPokemonList } from "./styled";
import { PokemonsCardList } from "../PokemonCardsList";

export const PokemonsList = () => {
  const { pokemons } = usePokemon();

  return (
    <StyledPokemonList>
      {pokemons?.map((pokemon) => (
        <PokemonsCardList
          key={pokemon?.id}
          id={pokemon?.id}
          image={
            pokemon?.sprites?.versions["generation-v"]?.["black-white"]
              ?.animated?.front_default
          }
          name={pokemon?.name}
          types={pokemon?.types}
        />
      ))}
    </StyledPokemonList>
  );
};
