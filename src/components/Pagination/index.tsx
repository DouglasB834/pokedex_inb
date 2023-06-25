"use client";
import { usePokemon } from "@/context";
import { useState, useEffect } from "react";

// import { ContainerFavorite, ContainerPaginacao } from "./styled";
// import { Avatar, AvatarGroup } from "@chakra-ui/react";
export const Pagination = () => {
  const imgvaforitos = {
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
    id: 1,
    name: "bulbasaur",
  };

  const { page, totalPages, setPage, searchPokemonByName, setPokemon } =
    usePokemon();

  const prevePage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
    console.log("proxima pagina");
  };
  const nextPage = () => {
    if (page + 1 != totalPages) {
      setPage(page + 1);
    }
    console.log("pagina anterior");
  };

  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (name: string) => {
    searchPokemonByName(name);
  };
  const cleanHandle = () => {
    if (setPokemon) {
      setPokemon(null);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const store = localStorage.getItem("pokemons");
      setFavorites(store ? JSON.parse(store) : []);
    }
  }, []);

  return (
    <div className="container-paginacao">
      <div className="container-favorite">
        <div className="title-favorite-pagination">
          <h3>Seus Pokemons favoritos</h3>

          <div className="paginacao">
            <button onClick={prevePage}>⬅️</button>
            {page + 1} de {totalPages}
            <button onClick={nextPage}>➡️</button>
          </div>
        </div>
        <ul>
          <button className="clean-button" onClick={cleanHandle}>
            Limpar
          </button>
          {favorites?.map((item: { img: string; name: string }, i: number) => (
            <li key={i} onClick={() => handleFavorite(item?.name)}>
              {<img src={item.img} alt=" item" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
