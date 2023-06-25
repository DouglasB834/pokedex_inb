import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export const getAllPokemon = async (data: string) => {
  try {
    const response = await api.get(data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
