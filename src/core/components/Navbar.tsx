import { FC } from "react";
import { NavLink } from "react-router-dom";
import { SiPokemon } from "react-icons/si";

export const Navbar: FC = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark" 
      data-bs-theme="dark"
    >
      <div className="container-fluid d-flex align-items-center">
        <NavLink 
          className="navbar-brand" 
          to='./list'
        >
          <SiPokemon className="nav-icon"/>
        </NavLink>
        {/* <button 
          className="navbar-toggler btn btn-warning"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
          {/* <form 
            className="d-flex" 
            role="search"
          >
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Buscar..." 
            />
            <button 
              className="btn btn-outline-warning" 
              type="submit"
            >Buscar</button>
          </form> */}
      </div>
    </nav>
  )
}
