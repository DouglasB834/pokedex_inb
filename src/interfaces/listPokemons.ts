import { ISprites, IStats, ITypes } from "./context";

export interface IPokemonCardList {
  id: number;
  name: string;
  types: ITypes[];
  image: string;
}

export interface IPokemonCard {
  id: number;
  name: string;
  types: ITypes[];
  image: string;
  abilities: IAbilities[];
  base_experience: number;
  forms: IForms[];
  height: number;
  order: number;
  sprites: ISprites;
  stats: IStats[];
  weight: number;
}
export interface IAbilities {
  ability: {
    name: string;
  };
}
export interface IForms {
  name: string;
  url: string;
}

//Species
export interface IPokemonSpecies {
  id: number;
  order: number;
  capture_rate: number;
  color: {
    name: string;
  };
  egg_groups: IEgg_groups[];
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: IFlavor_text_entries[];
  growth_rate: {
    name: string;
  };
  habitat: {
    name: string;
  };
  is_baby: boolean;
  shape: {
    name: string;
  };
}

export interface IEgg_groups {
  name: string;
  url: string;
}
export interface IFlavor_text_entries {
  flavor_text: string;
  language: {
    name: string;
  };
}
