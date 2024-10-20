// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../public/assets/style/index.css";
import "../public/assets/style/custom.css";
import { BrowserRouter } from "react-router-dom";
import CharactersContextProvider from "./context/CharactersContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <CharactersContextProvider>
  <App />
</CharactersContextProvider>
  // </StrictMode>
);
