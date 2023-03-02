import axios from "axios";

export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export const pokemonDetailApi = ( path: string ) => {
  return axios.create({
    baseURL: path
  });
}