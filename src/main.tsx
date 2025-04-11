import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // Import du RouterProvider
import router from "./router"; // Import de ton fichier router
import "./index.css"; // CSS global

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Fournit les routes */}
  </React.StrictMode>
);
