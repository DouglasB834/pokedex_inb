import { ITypes } from "./context";

export interface IPokemonCardList {
  id: number;
  name: string;
  types: ITypes[];
  image: string;
}
