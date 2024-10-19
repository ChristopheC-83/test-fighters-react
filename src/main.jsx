// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/index.css";
import "./assets/style/custom.css";
import { BrowserRouter } from "react-router-dom";
import CharactersContextProvider from "./context/CharactersContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <CharactersContextProvider>
  <App />
</CharactersContextProvider>
  // </StrictMode>
);
