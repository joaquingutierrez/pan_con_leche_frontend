import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css"
import { NavBar } from "../../components";

const Header = () => {

    return (
        <header className="header">
            <h2>LOGO</h2>
            <NavBar />
            <h4><NavLink to="/sesion">Iniciar sesion</NavLink></h4>
        </header>
    )
}

export default Header