"use client";
import { IChildren, IPokemon, IPokemonsProvider } from "@/interfaces/context";
import { api, getAllPokemon } from "@/utils/axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UseContextPokemon = createContext<IPokemonsProvider>(
  {} as IPokemonsProvider
);

export const UseContextPokemonProvider = ({ children }: IChildren) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([] as IPokemon[]);
  const [offset, setOffset] = useState<number>(0);
  const limit = 25;

  const fetchPokemons = async () => {
    try {
      const res = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
      const data = res.data.results.map(async (url: IPokemon) => {
        return await getAllPokemon(url?.url);
      });
      const result = await Promise.all(data);
      setPokemons(result as IPokemon[]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <UseContextPokemon.Provider value={{ pokemons, setOffset }}>
      {children}
    </UseContextPokemon.Provider>
  );
};

export const usePokemon = () => useContext(UseContextPokemon);
