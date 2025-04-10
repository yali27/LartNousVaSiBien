
import { useState } from "react";
import Header from "./Components/Header/Header";
import Card from "./Components/Cards/Cards";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    { title: "Picasso", description: "Découvrez les œuvres de Picasso.", imageSrc: "https://cdn.pixabay.com/photo/2022/03/30/14/49/art-7101291_1280.png" },
    { title: "Dali", description: "Explorez l'univers surréaliste de Dali.", imageSrc: "https://cdn.pixabay.com/photo/2024/04/28/21/13/ai-generated-8726341_1280.png" },
    { title: "Klimt", description: "Admirez les chefs-d'œuvre de Klimt.", imageSrc: "https://cdn.pixabay.com/photo/2021/02/05/21/22/abstract-5985987_1280.jpg" }
  ]);

  // Fonction pour ajouter une nouvelle carte
  const addCard = () => {
    const newCard = {
      title: "Nouvelle Carte",
      description: "Une carte ajoutée dynamiquement.",
      imageSrc: "https://cdn.pixabay.com/photo/2022/03/30/14/49/art-7101291_1280.png"
    };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  // Fonction pour supprimer une carte par index
  const removeCard = (indexToRemove: number) => {
    setCards((prevCards) =>
      prevCards.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <>
      <Header />
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
