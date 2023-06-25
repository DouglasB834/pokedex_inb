"use client";
import { IChildren, IPokemon, IPokemonsProvider } from "@/interfaces/context";
import { IPokemonCard, IPokemonSpecies } from "@/interfaces/listPokemons";
import { api, getAllPokemon } from "@/api/axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UseContextPokemon = createContext<IPokemonsProvider>(
  {} as IPokemonsProvider
);

export const UseContextPokemonProvider = ({ children }: IChildren) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([] as IPokemon[]);
  const [pokemon, setPokemon] = useState<IPokemonCard | null>(null);
  const [searchPokemon, setSearchPokemon] = useState<string>("");
  const [speciesPokemon, setSpeciesPokemon] = useState<IPokemonSpecies>(
    {} as IPokemonSpecies
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const limitPage = 27;

  const fetchPokemons = async (limit: number, offset: number = 0) => {
    setIsLoading(true);
    try {
      const res = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
      const data = res.data.results.map(async (url: IPokemon) => {
        return await getAllPokemon(url?.url);
      });

      setTotalPages(Math.ceil(res.data.count / limit));

      const result = await Promise.all(data);
      setPokemons(result as IPokemon[]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchPokemonByName = async (pokemon: string) => {
    try {
      setIsLoading(true);
      const res = await api.get(`pokemon/${pokemon}`);
      setPokemon(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const pokemonSpecies = async (id: number) => {
    try {
      const res = await api.get(`pokemon-species/${id}`);
      setSpeciesPokemon(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavorite = (name: string, img: string) => {
    const storedPokemons = JSON.parse(localStorage.getItem("pokemons") || "[]");
    const existingPokemonIndex = storedPokemons.findIndex(
      (item: { name: string }) => item.name === name
    );

    if (existingPokemonIndex >= 0) {
      // Remove o Pokémon da lista de favoritos
      storedPokemons.splice(existingPokemonIndex, 1);
      console.log(`Pokémon ${name} removido da lista de favoritos.`);
    } else {
      // Adiciona o Pokémon à lista de favoritos
      storedPokemons.push({ name: name, img: img });
      console.log(`Pokémon ${name} adicionado à lista de favoritos.`);
    }
    localStorage.setItem("pokemons", JSON.stringify(storedPokemons));
  };

  useEffect(() => {
    fetchPokemons(limitPage, limitPage * page);
  }, [pokemon, page]);

  return (
    <UseContextPokemon.Provider
      value={{
        pokemons,
        pokemon,
        isLoading,
        page,
        setPage,
        totalPages,
        searchPokemon,
        setSearchPokemon,
        searchPokemonByName,
        pokemonSpecies,
        speciesPokemon,
        handleFavorite,
        setPokemon,
      }}
    >
      {children}
    </UseContextPokemon.Provider>
  );
};

export const usePokemon = () => useContext(UseContextPokemon);
