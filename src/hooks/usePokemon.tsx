import { pokemonApi } from '../api/pokemonApi';
import { Pokemon } from '../interfaces/pokemon';
import { useQuery } from '@tanstack/react-query';

const getPokemon = async ( pokemonName: string ): Promise<Pokemon> => {
  const { data } = await pokemonApi.get<Pokemon>(`/pokemon/${pokemonName}/`);
  return data;
}

export const usePokemon = ( name: string ) => {
  
  const pokemonQuery = useQuery(
    ['pokemon', name],
    () => getPokemon( name )
  );
  
  return { pokemonQuery };

}
