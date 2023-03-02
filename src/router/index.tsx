import { createBrowserRouter, Navigate } from "react-router-dom";

import { PokemonApp } from "../PokemonApp";
import { ListView } from '../pokemons/views/ListView';
import { PokemonView } from '../pokemons/views/PokemonView';

export const router = createBrowserRouter([
  {
    path: '/pokemons',
    element: <PokemonApp />,
    children: [
      { path: 'list', element: <ListView />,  },
      { path: 'detail/:name', element: <PokemonView /> },
      { path: '*', element: <Navigate to="list" /> },
    ]
  },
  {
    path: '/',
    element: <Navigate to={'pokemons/list'} />
  },
  {
    path: '*',
    element: <h1>404 - NOT FOUND</h1>
  }
]);