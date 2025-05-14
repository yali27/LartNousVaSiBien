import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Card from "./Components/Cards/Cards";
import "./App.css";

interface Artwork {
  id: number;
  title: string;
  artist_display: string;
  image_id?: string;
}

function App() {
  const [cards, setCards] = useState([
    { title: "Picasso", description: "Découvrez les œuvres de Picasso.", imageSrc: "https://cdn.pixabay.com/photo/2022/03/30/14/49/art-7101291_1280.png" },
    { title: "Dali", description: "Explorez l'univers surréaliste de Dali.", imageSrc: "https://cdn.pixabay.com/photo/2024/04/28/21/13/ai-generated-8726341_1280.png" },
    { title: "Klimt", description: "Admirez les chefs-d'œuvre de Klimt.", imageSrc: "https://cdn.pixabay.com/photo/2021/02/05/21/22/abstract-5985987_1280.jpg" }
  ]);

  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Synchronisation avec le localStorage
    const accountStatus = localStorage.getItem("isAccountCreated") === "true";
    setIsAccountCreated(accountStatus);
  }, []);

  useEffect(() => {
    // Récupération des œuvres via l'API
    fetch("https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,image_id&page=1&limit=12")
      .then((response) => response.json())
      .then((data) => {
        console.log("Œuvres récupérées :", data.data); // Vérification dans la console
        setArtworks(data.data); // Stocke les œuvres dans l'état
      })
      .catch((error) => console.error("Erreur lors de la récupération des œuvres :", error));
  }, []);
  const addRandomArtwork = () => {
    if (!isAccountCreated) {
      alert("Vous devez d'abord créer un compte pour ajouter une carte.");
      navigate("/create-account");
      return;
    }

    if (artworks.length === 0) {
      alert("Aucune œuvre n'a été récupérée. Veuillez réessayer.");
      return;
    }

    let randomArtwork: Artwork;
    let attempts = 0;

    // Boucle pour sélectionner une œuvre unique
    do {
      const randomIndex = Math.floor(Math.random() * artworks.length);
      randomArtwork = artworks[randomIndex];
      attempts++;
    } while (
      cards.some((card) => card.description === randomArtwork.title || card.title === randomArtwork.artist_display) &&
      attempts < 20
    );

    const imageUrl = randomArtwork.image_id
      ? `https://www.artic.edu/iiif/2/${randomArtwork.image_id}/full/843,/0/default.jpg`
      : "https://via.placeholder.com/150";

    const newCard = {
      title: randomArtwork.artist_display,
      description: randomArtwork.title,
      imageSrc: imageUrl,
    };

    setCards((prevCards) => [...prevCards, newCard]);
  };



  const removeCard = (indexToRemove: number) => {
    setCards((prevCards) =>
      prevCards.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("isAccountCreated");
    setIsAccountCreated(false);
    navigate("/");
  };

  return (
    <>
      <Header handleLogout={handleLogout} />
      <h1>L'art nous va si bien !</h1>
      <button onClick={addRandomArtwork} className="add-card-button">
        Ajouter une Carte Aléatoire
      </button>
      <main className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} onRemove={() => removeCard(index)} />
        ))}
      </main>
    </>
  );
}

export default App;

