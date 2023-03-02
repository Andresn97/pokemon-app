import { Species, Chain } from '../interfaces';

export const getEvolutionChain = ( chain: Chain[] ): Species[] => {
  let species: Species[] = [];
  let increment = 1;
  let arrayIncrement = chain;

  if (arrayIncrement.length > 0){
    for (let index = 0; index < increment; index++) {
      species = [ ...species, arrayIncrement[0]?.species ]
      if ( arrayIncrement[0].evolves_to.length > 0 ) {
        increment++;
        arrayIncrement = arrayIncrement[0].evolves_to
      }
    }
  }

  return species;

}