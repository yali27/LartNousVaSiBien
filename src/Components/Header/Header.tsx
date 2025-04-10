import React from "react";
import "./header.css";

const Header: React.FC = () => {
    return (
        <header className="header">
            <img className="logo" src="https://cdn.pixabay.com/photo/2020/04/03/07/26/eye-4997724_640.png" alt="Logo" />
            <nav>
                <ul className="nav-list">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/explore">Explorer</a></li>
                    <li><a href="/about">À propos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;


