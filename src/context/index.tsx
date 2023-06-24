"use client";
import { IChildren, IPokemon, IPokemonsProvider } from "@/interfaces/context";
import { IPokemonCard } from "@/interfaces/listPokemons";
import { api, getAllPokemon } from "@/utils/axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UseContextPokemon = createContext<IPokemonsProvider>(
  {} as IPokemonsProvider
);

export const UseContextPokemonProvider = ({ children }: IChildren) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([] as IPokemon[]);
  const [pokemon, setPokemon] = useState<IPokemonCard | undefined>(undefined);
  const [searchPokemon, setSearchPokemon] = useState<string>("");

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
      }}
    >
      {children}
    </UseContextPokemon.Provider>
  );
};

export const usePokemon = () => useContext(UseContextPokemon);
