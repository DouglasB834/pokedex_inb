export interface IPokemonsProvider {
  pokemons: IPokemon[];
  setOffset: (offset: number) => void;
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
export interface IPokemon {
  id: number;
  stats: IStats[];
  sprites: ISprites;
  name: string;
  url: string;
  types: ITypes[];
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
  };
}
