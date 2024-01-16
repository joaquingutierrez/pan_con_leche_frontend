import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css"

const NavBar = () => {

    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/productos">Productos</NavLink></li>
                <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar