import React from "react";

import "./style.css"
import { NavBar } from "../../components";

const Header = () => {

    return (
        <header className="header">
            <h2>LOGO</h2>
            <NavBar />
            <h4>Iniciar sesion</h4>
        </header>
    )
}

export default Header