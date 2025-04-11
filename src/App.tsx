import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Card from "./Components/Cards/Cards";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    { title: "Picasso", description: "Découvrez les œuvres de Picasso.", imageSrc: "https://cdn.pixabay.com/photo/2022/03/30/14/49/art-7101291_1280.png" },
    { title: "Dali", description: "Explorez l'univers surréaliste de Dali.", imageSrc: "https://cdn.pixabay.com/photo/2024/04/28/21/13/ai-generated-8726341_1280.png" },
    { title: "Klimt", description: "Admirez les chefs-d'œuvre de Klimt.", imageSrc: "https://cdn.pixabay.com/photo/2021/02/05/21/22/abstract-5985987_1280.jpg" }
  ]);

  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Synchronisation initiale
    const accountStatus = localStorage.getItem("isAccountCreated") === "true";
    setIsAccountCreated(accountStatus);
  }, []);

  const addCard = () => {
    if (!isAccountCreated) {
      alert("Vous devez d'abord créer un compte pour ajouter une carte.");
      navigate("/create-account");
      return;
    }

    const newCard = {
      title: "Nouvelle Carte",
      description: "Une carte ajoutée dynamiquement.",
      imageSrc: "https://cdn.pixabay.com/photo/2022/03/30/14/49/art-7101291_1280.png"
    };

    setCards((prevCards) => [...prevCards, newCard]);
  };

  const removeCard = (indexToRemove: number) => {
    setCards((prevCards) =>
      prevCards.filter((_, index) => index !== indexToRemove)
    );
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    localStorage.removeItem("isAccountCreated"); // Supprime l'état global
    setIsAccountCreated(false); // Réinitialise l'état local
    navigate("/"); // Redirige vers la page d'accueil
  };

  return (
    <>
      <Header handleLogout={handleLogout} />
      <h1>L'art nous va si bien !</h1>
      <button onClick={addCard} className="add-card-button">Ajouter une Carte</button>
      <main className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} onRemove={() => removeCard(index)} />
        ))}
      </main>
    </>
  );
}

export default App;



