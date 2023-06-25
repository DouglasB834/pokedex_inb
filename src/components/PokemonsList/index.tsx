"use client";
import { usePokemon } from "@/context";
import { PokemonsCardList } from "../PokemonCardsList";
import { Loading } from "../Loading";

export const PokemonsList = () => {
  const { pokemons, pokemon, isLoading } = usePokemon();

  return (
    <ul className="pokemonList">
      {pokemon && pokemon != null ? (
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
      ) : isLoading ? (
        <Loading />
      ) : (
        pokemons?.map((pokemon) => (
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
        ))
      )}
    </ul>
  );
};
