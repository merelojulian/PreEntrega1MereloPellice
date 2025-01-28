
import React from "react";
import "./navbar.css";
import CartWidget from "../common/CartWidget";

const NavBar = () => {
    return (
        <div className="navbar">
            <h3 className="logo">Musica</h3>
            <ul className="menu">
                <li><a href="">Guitarras</a></li>
                <li><a href="">Eléctricas</a></li>
                <li><a href="">Acústicas</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar