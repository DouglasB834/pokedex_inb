"use client";
import { usePokemon } from "@/context";
import { IPokemonCard } from "@/interfaces/listPokemons";
import { useState, useEffect } from "react";
import { api } from "@/utils/axios";
// import { MainContainer } from "../containerPage";

export default function Pokemon({
  searchParams,
}: {
  searchParams: { id: string };
}) {
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
      handlePokemon();
    }
  }, [searchParams.id]);

  return (
    <main className="mainContainer">
      <div className="container">
        <div>
          <div>
            <figure>
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
            </aside>
          </div>

          <div>
            <h1>{pokemon?.name}</h1>
            <ul>
              {pokemon?.stats?.map((stat) => (
                <li key={stat?.stat?.name}>
                  <p>
                    {stat?.stat?.name.includes("special")
                      ? stat?.stat?.name.replace("special-", "Sp. ")
                      : stat?.stat?.name}
                    - {stat?.base_stat}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section>
          <div>Evoluções</div>
          <div>tranformações lugar fraqueza força</div>
        </section>
      </div>
    </main>
  );
}
