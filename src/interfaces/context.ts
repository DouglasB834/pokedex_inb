import { IPokemonCard, IPokemonSpecies } from "./listPokemons";

export interface IPokemonsProvider {
  pokemons: IPokemon[];
  page: number;
  isLoading: boolean;
  setPage: (name: number) => void;
  pokemonSpecies: (id: number) => void;
  totalPages: number;
  searchPokemon: string;
  setSearchPokemon: (name: string) => void;
  searchPokemonByName: (name: string) => void;
  pokemon?: IPokemonCard | null;
  setPokemon?: (pokemon: IPokemonCard | null) => void | null;
  speciesPokemon?: IPokemonSpecies;
  handleFavorite(name: string, img: string): void;
}

export interface IChildren {
  children: React.ReactNode;
}

// response api
export interface IResPokemons {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}
export interface IPokemon extends IPokemonCard {
  url: string;
}

export interface IStats {
  base_stat: number;
  effort: number;
  stat: IStat;
}

export interface IStat {
  name: string;
  url: string;
}
export interface ISprites {
  front_default: string;
  front_shiny: string;
  versions: IVersions;
}
export interface ITypes {
  slot: number;
  type: IType;
}
export interface IType {
  name: string;
  url: string;
}

export interface IVersions {
  "generation-v": IGenerationV;
}
export interface IGenerationV {
  "black-white": IBlackWhite;
}

export interface IBlackWhite {
  animated: {
    front_default: string;
    front_shiny: string;
  };
}
