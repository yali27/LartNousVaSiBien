import Header from "./Components/Header/Header";
import Card from "./Components/Cards/Cards";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <h1>L'art nous va si bien !</h1>
      <main className="cards-container">


        <figure className="card">
          <figcaption>Pablo Picasso</figcaption>
          <img
            src="https://cdn.pixabay.com/photo/2022/03/30/14/49/art-7101291_1280.png"
            alt="Picasso"
            className="card-image"
          />

          <button onClick={() => alert('Découvrez les œuvres de Picasso')}>
            Explorer
          </button>

        </figure>

        <figure className="card">
          <figcaption>Salvador Dali</figcaption>
          <img
            src="https://cdn.pixabay.com/photo/2024/04/28/21/13/ai-generated-8726341_1280.png"
            alt="Dali"
            className="card-image"
          />

          <button onClick={() => alert('Explorez l\'univers surréaliste de Dali')}>
            Explorer
          </button>

        </figure>

        <figure className="card">
          <figcaption>Gustav Klimt</figcaption>
          <img
            src="https://cdn.pixabay.com/photo/2019/07/24/02/30/klimt-4359075_1280.jpg"
            alt="Klimt"
            className="card-image"
          />

          <button onClick={() => alert('Admirez les chefs-d\'œuvre de Klimt')}>
            Explorer
          </button>

        </figure>
      </main>
    </>
  );
}


export default App;
