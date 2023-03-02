import { pokemonDetailApi } from '../api/pokemonApi';
import { PokemonSpecies, Species, EvolutionChain } from '../interfaces';
import { useQuery } from '@tanstack/react-query';

const getPokemonSpecies = async ( path: string ): Promise<PokemonSpecies> => {
  const { data } = await pokemonDetailApi(path).get<PokemonSpecies>('');
  return data;
}

const getPokemonEvolutionChain = async ( path: string ): Promise<EvolutionChain> => {
  const { data } = await pokemonDetailApi(path).get<EvolutionChain>('');
  return data;
}

export const usePokemonEvolutions = ( specie: Species ) => {
  
  const pokemonSpeciesQuery = useQuery(
    ['pokemon', specie.name, 'species'],
    () => getPokemonSpecies(specie.url)
  );

  const pokemonEvolutionQuery = useQuery(
    ['pokemon', specie.name, 'chain'],
    () => getPokemonEvolutionChain( pokemonSpeciesQuery.data!.evolution_chain.url ),
    {
      enabled: !!pokemonSpeciesQuery.data
    }
  );

  return { pokemonEvolutionQuery }

}
