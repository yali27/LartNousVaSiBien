import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Pour la redirection
import "./CreateAccount.css";

const CreateAccount: React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook pour naviguer

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation de l'email avec une regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!username || !email.match(emailRegex) || password.length < 6) {
            setError(
                "Veuillez entrer un nom d'utilisateur, un email valide et un mot de passe d'au moins 6 caractères."
            );
            return;
        }

        setError(""); // Réinitialise l'erreur si tout est bon
        localStorage.setItem("isAccountCreated", "true"); // Enregistre l'état dans localStorage
        navigate("/"); // Redirige vers la page d'accueil
    };

    return (
        <div className="create-account-container">
            <h1>Créer un compte</h1>
            <form onSubmit={handleSubmit} className="create-account-form">
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur :</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                    />
                </div>
                <button type="submit" className="submit-button">
                    Créer un compte
                </button>
            </form>
        </div>
    );
};

export default CreateAccount;