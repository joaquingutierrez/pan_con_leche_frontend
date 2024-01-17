import React from "react";

import "./style.css"

const SignIn = () => {

    return (
        <form className="sign-in-container">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Iniciar sesión" />
        </form>
    )
}

export default SignIn