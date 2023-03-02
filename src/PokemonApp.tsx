import { Outlet } from "react-router-dom";

import { Navbar } from "./core/components/Navbar";

export const PokemonApp = () => {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-3">
        <Outlet />
      </div>
    </>
  )
}
