"use client";
import { IPokemonCard } from "@/interfaces/listPokemons";
import { useState, useEffect } from "react";
import { api } from "@/utils/axios";
import { GrafitStatus, Habilites, ListStatus } from "./styled";
import { IconBack } from "@/assets/iconsBack";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/`);
  };

  console.log(pokemon);
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
              <div className="pokemon-snap">
                <img
                  src={pokemon?.sprites?.front_default}
                  alt={pokemon?.name}
                />
              </div>
              <div className="half-circle"></div>
            </div>

            <div className="poke-card">
              <div className="name">
                <h1>{pokemon.name}</h1>
                <div className="hp">
                  <span>HP {pokemon.stats?.[0]?.base_stat}</span>
                </div>
              </div>

              <ul className="stats">
                <li>
                  {pokemon.types?.map((type, i) => (
                    <p key={i}>{type?.type?.name}</p>
                  ))}
                  <br />
                  <span>Type</span>
                </li>
                <li>
                  {pokemon.weight}
                  <br />
                  <span>Weight</span>
                </li>
                <li>
                  {pokemon.height}
                  <br />
                  <span>Height</span>
                </li>
              </ul>

              <div className="info">
                <h3>Forma Rara</h3>
                <img src={pokemon.sprites?.front_shiny} alt="" />
              </div>

              <Habilites>
                <h3>Habilidades</h3>
                {pokemon?.abilities?.map((ability, i) => (
                  <li key={i}>
                    <p>{ability?.ability?.name}</p>
                  </li>
                ))}
              </Habilites>

              <GrafitStatus>
                {pokemon.stats?.map((stat, i) => (
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
                        : stat?.stat?.name}
                    </p>
                    <span>{stat?.base_stat}</span>
                  </ListStatus>
                ))}
              </GrafitStatus>
            </div>
          </div>
          {/* card pokemon info  */}
        </div>

        <div>
          <h3>aquiiiiii</h3>
        </div>
      </div>
    </div>

    // //main container
    // <main classNameName="mainContainer">
    //   <div className="container">
    //     <div>
    //       <div>
    //         <figure>
    //           <img
    //             src={
    //               pokemon?.sprites?.versions["generation-v"]?.["black-white"]
    //                 ?.animated?.front_default
    //             }
    //             alt={pokemon?.name}
    //             title={pokemon?.name}
    //           />
    //         </figure>

    //         <aside>
    //           <figure>
    //             <img
    //               src={pokemon?.sprites?.front_default}
    //               alt={pokemon?.name}
    //               title={pokemon?.name}
    //             />
    //           </figure>
    //           {pokemon?.sprites?.front_shiny && (
    //             <figure>
    //               <img
    //                 src={pokemon?.sprites?.front_shiny}
    //                 alt={pokemon?.name}
    //                 title={pokemon?.name}
    //               />{" "}
    //               <figcaption>
    //                 <span>Raro: shiny</span>
    //               </figcaption>
    //             </figure>
    //           )}
    //         </aside>
    //       </div>

    //       <div>
    //         <h1>{pokemon?.name}</h1>
    //         <ul>
    //           {pokemon?.stats?.map((stat) => (
    //             <li key={stat?.stat?.name}>
    //               <p>
    //                 {stat?.stat?.name.includes("special")
    //                   ? stat?.stat?.name.replace("special-", "Sp. ")
    //                   : stat?.stat?.name}
    //                 - {stat?.base_stat}
    //               </p>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>

    //     <section>
    //       <div>Evoluções</div>
    //       <div>tranformações lugar fraqueza força</div>
    //     </section>
    //   </div>
    // </main>
  );
}
