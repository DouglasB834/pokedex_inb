"use client";
import { IPokemonCardList } from "@/interfaces/listPokemons";
import { StyledPookemonCards } from "./styled";
import { useRouter } from "next/navigation";
import { capitalize } from "@/utils";

export const PokemonsCardList = (props: IPokemonCardList) => {
  const router = useRouter();

  const handlePokemonRouter = (id: number) => {
    router.push(`/pokemon?id=${id}`);
  };
  return (
    <StyledPookemonCards onClick={() => handlePokemonRouter(props?.id)}>
      <span className="light"></span>
      <span className="light"></span>
      <span className="light"></span>
      <span className="light"></span>

      <figure>
        <img src={props?.image} alt={props?.name} title={props?.name} />
      </figure>
      <div>
        <p>N: {props?.id}</p>
        <h3>{capitalize(props?.name)}</h3>
        <div>
          {props?.types?.map((type, i) => (
            <span key={i}> {capitalize(type?.type?.name)} </span>
          ))}
        </div>
      </div>
    </StyledPookemonCards>
  );
};
