"use client";
import { IPokemonCardList } from "@/interfaces/listPokemons";
import { StyledPookemonCards } from "./styled";
import { useRouter } from "next/navigation";

export const PokemonsCardList = (props: IPokemonCardList) => {
  const router = useRouter();

  const handlePokemonRouter = (id: number) => {
    router.push(`/pokemon?id=${id}`);
  };

  return (
    <StyledPookemonCards onClick={() => handlePokemonRouter(props?.id)}>
      <figure>
        <img src={props?.image} alt={props?.name} title={props?.name} />
      </figure>
      <div>
        <p>N: {props?.id}</p>
        <h3>{props?.name}</h3>
        <div>
          {props?.types?.map((type, i) => (
            <span key={i}> {type?.type?.name} </span>
          ))}
        </div>
      </div>
    </StyledPookemonCards>
  );
};
