import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';

import { pokemonApi } from '../api/pokemonApi';
import { PokemonResponse } from '../interfaces';


const getPokemons = async ( offsetNum: number ): Promise<PokemonResponse> => {
  const { data } = await pokemonApi.get<PokemonResponse>(
    `/pokemon?limit=12&offset=${offsetNum}`
  );
  return data;
}

export const usePokemons = () => {
  
  const [page, setPage] = useState(1);
  const [offsetNum, setOffsetNum] = useState(0);

  const pokemonsQuery = useQuery(
    ['pokemons', page],
    () => getPokemons( offsetNum )
  );

  const previousPage = () => {
    if (pokemonsQuery.data?.previous) {
      setPage( page - 1 );
      setOffsetNum( offsetNum - 12 );
    }
  }

  const nextPage = () => {
    if (!pokemonsQuery.data?.next) return;

    setPage( page + 1 );
    setOffsetNum( offsetNum + 12 );

  }

  return { 
    pokemonsQuery, 
    page: (pokemonsQuery.isFetching) ? 'Loading' : page,
    previousPage,
    nextPage 
  };

}
