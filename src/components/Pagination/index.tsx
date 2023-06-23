import { ContainerFavorite, ContainerPaginacao } from "./styled";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
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
    imgvaforitos,
    imgvaforitos,
    imgvaforitos,
    imgvaforitos,
    imgvaforitos,
  ];
  return (
    <ContainerPaginacao>
      <ContainerFavorite>
        <h3>Seus Pokemons favoritos</h3>
        <AvatarGroup spacing="1rem" width={"100%"} overflow={"x"}>
          {arraytest.map((item) => (
            <Avatar
              bg={`var(--fourth-color)`}
              name={item.name}
              src={item.img}
              borderRadius={"50%"}
              cursor={"pointer"}
            />
          ))}
        </AvatarGroup>
      </ContainerFavorite>

      <div className="paginacao">
        {[1, 2, 3, 4, 5].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </ContainerPaginacao>
  );
};
