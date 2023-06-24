"use client";

import { usePokemon } from "@/context";

// import { ContainerFavorite, ContainerPaginacao } from "./styled";
// import { Avatar, AvatarGroup } from "@chakra-ui/react";
export const Pagination = () => {
  const imgvaforitos = {
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
    id: 1,
    name: "bulbasaur",
  };
  const arraytest = [
    imgvaforitos,
    imgvaforitos,
    imgvaforitos,
    imgvaforitos,
    imgvaforitos,
  ];
  const { page, totalPages, setPage } = usePokemon();

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

  return (
    <div className="container-paginacao">
      <div className="container-favorite">
        <h3>Seus Pokemons favoritos</h3>
        <ul>
          {arraytest.map((item, i) => (
            <li key={i}>{<img src={item.img} alt="" />}</li>
          ))}
        </ul>
      </div>

      <div className="paginacao">
        <button onClick={prevePage}>⬅️</button>
        {page + 1} de {totalPages}
        <button onClick={nextPage}>➡️</button>
      </div>
    </div>
  );
};
