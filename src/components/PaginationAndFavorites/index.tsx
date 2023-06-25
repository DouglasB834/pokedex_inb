"use client";
import { usePokemon } from "@/context";
import { useState, useEffect } from "react";

export const Pagination = () => {
  const { page, totalPages, setPage, searchPokemonByName, setPokemon } =
    usePokemon();

  const prevePage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page + 1 != totalPages) {
      setPage(page + 1);
    }
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
    <div className="container-pagination">
      <div className="container-favorite">
        <div className="title-favorite-pagination">
          <h3>Seus Pokemons favoritos</h3>

          <div className="pagination">
            <button onClick={prevePage}>⬅️</button>
            <p>
              {page + 1} de {totalPages}
            </p>
            <button onClick={nextPage}>➡️</button>
          </div>
        </div>
        <ul>
          <button className="clean-button" onClick={cleanHandle}>
            Limpar pesquisa
          </button>
          {favorites?.map((item: { img: string; name: string }, i: number) => (
            <li key={i} onClick={() => handleFavorite(item?.name)}>
              {<img src={item.img} alt="item" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
