import { useQuery } from '@tanstack/react-query';

import { Type } from '../interfaces';

import { pokemonDetailApi } from '../api/pokemonApi';

const getPokemonTypes = async ( path: string ): Promise<any> => {
  const { data } = await pokemonDetailApi(path).get('');
  return data;
}

export const usePokemonTypes = ( type: Type ) => {
  
  // const pokemonTypesQuery = useQuery(
  //   ['pokemon', type., 'types'],
  //   () => getPokemonTypes( path ),
  //   {
  //     enabled: !!pokemonQuery.data
  //   }
  // );
}