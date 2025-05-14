import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateAccount from "./Pages/CreateAccount";
import Header from "./Components/Header/Header"; // Import du Header

const router = createBrowserRouter([
    {
        path: "/", // Route pour la page d'accueil
        element: <App />,
    },
    {
        path: "/create-account", // Route pour la page Créer un compte
        element: (
            <>
                <Header handleLogout={() => { /* Fonction vide pour le placeholder */ }} />
                <CreateAccount />
            </>
        ),
    },
]);

export default router;