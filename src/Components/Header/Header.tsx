import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC<{ handleLogout: () => void }> = ({ handleLogout }) => {
    return (
        <header className="header">
            <img className="logo" src="https://cdn.pixabay.com/photo/2020/04/03/07/26/eye-4997724_640.png" alt="Logo" />
            <nav>
                <ul className="nav-list">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/create-account">Créer un compte</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li>
                        <button onClick={handleLogout} className="logout-button" title="Se déconnecter">
                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png" alt="Déconnexion" />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;




