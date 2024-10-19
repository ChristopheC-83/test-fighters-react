
import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

export default function Footer() {

  
  const { valeurTest } = useContext(CharactersContext);
  return (
    <footer className="p-4 mt-3 border-2 border-top customShadow">
      <div className="container mx-auto text-center">
        Footer de mon projet Fighters en React avec une valeur test de {valeurTest}
      </div>
    </footer>
  );
}
