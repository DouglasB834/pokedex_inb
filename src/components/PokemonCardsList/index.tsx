import { IPokemonCardList } from "@/interfaces/listPokemons";
import { StyledPookemonCards } from "./styled";
import { Avatar } from "@chakra-ui/react";

export const PokemonsCardList = (props: IPokemonCardList) => {
  return (
    <StyledPookemonCards>
      <figcaption>
        <img src={props.image} alt={props.name} title={props.name} />
      </figcaption>
      <div>
        <p>N: {props.id}</p>
        <h3>{props.name}</h3>
        <div>
          {props.types.map((type, i) => (
            <span key={i}> {type.type.name} </span>
          ))}
        </div>
      </div>
    </StyledPookemonCards>
  );
};
