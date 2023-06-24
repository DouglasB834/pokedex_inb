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
