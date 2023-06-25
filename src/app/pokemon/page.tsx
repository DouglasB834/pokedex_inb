"use client";
import { IPokemonCard } from "@/interfaces/listPokemons";
import { useState, useEffect } from "react";
import { api } from "@/api/axios";
import {
  ContainerSpecies,
  GrafitStatus,
  Habilites,
  ListStatus,
} from "./styled";
import { IconBack } from "@/assets/iconsBack";
import { useRouter } from "next/navigation";
import { usePokemon } from "@/context";
import { capitalize } from "@/utils";

export default function Pokemon({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { pokemonSpecies, speciesPokemon, handleFavorite } = usePokemon();
  const [pokemon, setPokemon] = useState<IPokemonCard>({} as IPokemonCard);

  const handlePokemon = () => {
    const getPokemon = async (id: number) => {
      try {
        const res = await api.get(`pokemon/${id}`);
        setPokemon(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon(Number(searchParams.id));
  };

  useEffect(() => {
    if (searchParams.id) {
      pokemonSpecies(Number(searchParams.id));
      handlePokemon();
    }
  }, [searchParams.id]);
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/`);
  };

  return (
    <div className="mainContainer">
      <div className="containerPage">
        <div className="card-container">
          <button onClick={handleRedirect} className="back-button">
            <IconBack />
          </button>
          <div className="pokemon-container">
            <div className="power-level">
              <span> CP {pokemon.base_experience}</span>

              <button
                className="favorite"
                onClick={() =>
                  handleFavorite(pokemon?.name, pokemon?.sprites?.front_default)
                }
              >
                ⭐
              </button>

              <figure className="pokemon-snap">
                <img
                  src={pokemon?.sprites?.front_default}
                  alt={pokemon?.name}
                />
              </figure>
              <div className="half-circle"></div>
            </div>

            <div className="poke-card">
              <div className="name">
                <h1>{capitalize(pokemon.name)}</h1>
                <div className="hp">
                  <span>HP {pokemon.stats?.[0]?.base_stat}</span>
                </div>
              </div>

              <ul className="stats">
                <li>
                  {pokemon.types?.map((type, i) => (
                    <span key={i}>{type?.type?.name} </span>
                  ))}
                  <p>Type</p>
                </li>
                <li>
                  {pokemon?.weight}
                  <p>Weight</p>
                </li>
                <li>
                  {pokemon?.height}
                  <p>Height</p>
                </li>
              </ul>

              <div className="info">
                <h3>Forma Rara</h3>
                <img src={pokemon?.sprites?.front_shiny} alt="" />
              </div>

              <Habilites>
                <h3>Habilidades</h3>
                {pokemon?.abilities?.map((ability, i) => (
                  <li key={i}>
                    <p>{capitalize(ability?.ability?.name)}</p>
                  </li>
                ))}
              </Habilites>

              <GrafitStatus>
                <h3>Status</h3>
                {pokemon?.stats?.map((stat, i) => (
                  <ListStatus
                    status={stat?.base_stat}
                    name={stat?.stat?.name}
                    key={i}
                  >
                    <p>
                      {stat?.stat?.name.includes("special-attack")
                        ? stat?.stat?.name.replace("special-attack", "Sp.Atk")
                        : stat?.stat?.name.includes("special-defense")
                        ? stat?.stat?.name.replace("special-defense", "Sp.Def")
                        : capitalize(stat?.stat?.name)}
                    </p>

                    <p className="number-stat">
                      <span>{stat?.base_stat}</span>
                    </p>
                  </ListStatus>
                ))}
              </GrafitStatus>
            </div>
          </div>
        </div>

        <ContainerSpecies>
          <h2>Informação da Especie</h2>
          <div>
            <div className="info-species">
              <p>
                Area de Capitura: <span>{speciesPokemon?.capture_rate}</span>
              </p>
              <p>
                Cor: <span>{speciesPokemon?.color?.name}</span>{" "}
              </p>

              <p>
                Habitate: <span> {speciesPokemon?.habitat?.name}</span>{" "}
              </p>
              <p>
                Corpo: <span>{speciesPokemon?.shape?.name}</span>{" "}
              </p>
              <ul>
                <h4>Pertence ao Gruope:</h4>
                <li>
                  {speciesPokemon?.egg_groups?.map((eggGroup, i) => (
                    <p key={i}>{eggGroup?.name}</p>
                  ))}
                </li>
              </ul>
            </div>
            <div className="tip-info">
              <h3>Dicas sobre Pokemon</h3>
              <p>{speciesPokemon?.flavor_text_entries?.[0]?.flavor_text}</p>
              <p>{speciesPokemon?.flavor_text_entries?.[4]?.flavor_text}</p>
              <p>{speciesPokemon?.flavor_text_entries?.[5]?.flavor_text}</p>
              <p>{speciesPokemon?.flavor_text_entries?.[8]?.flavor_text}</p>
            </div>
          </div>
        </ContainerSpecies>
      </div>
    </div>
  );
}
