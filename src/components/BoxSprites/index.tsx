"use client";

import { BoxSpritesContainer } from "./styled";

export const BoxSprites = ({ pokemon }: any) => {
  console.log("chamando", pokemon);
  return (
    <BoxSpritesContainer>
      {/* <figure>
        <img
          src={
            pokemon?.sprites?.versions["generation-v"]?.["black-white"]
              ?.animated?.front_default
          }
          alt={pokemon?.name}
          title={pokemon?.name}
        />
      </figure>

      <aside>
        <figure>
          <img
            src={pokemon?.sprites?.front_default}
            alt={pokemon?.name}
            title={pokemon?.name}
          />
        </figure>
        {pokemon?.sprites?.front_shiny && (
          <figure>
            <img
              src={pokemon?.sprites?.front_shiny}
              alt={pokemon?.name}
              title={pokemon?.name}
            />{" "}
            <figcaption>
              <span>Raro: shiny</span>
            </figcaption>
          </figure>
        )}
      </aside> */}
    </BoxSpritesContainer>
  );
};
