"use client";
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
        {[1, 2, 3, 4, 5].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};
