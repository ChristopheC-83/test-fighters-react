import React, { useContext, useEffect } from "react";
import { CharactersContext } from "../context/CharactersContext";
import Card from "../components/Card";
import { useCharactersManager } from "../hooks/useCharactersManager";
import { Link } from "react-router-dom";

export default function AllCharacters() {
  const { allCharacters, setAllCharacters } = useContext(CharactersContext);
  const { deleteCharacter } = useCharactersManager();

  // function deleteCharacter(id, ) {
  //   console.log("clic");
  //   // Mettre à jour l'état en filtrant le personnage avec l'ID à supprimer
  //   setAllCharacters(allCharacters.filter((character) => character.id !== id));
  // }

  function updateCharacter(id) {
    console.log("clic");
    // Mettre à jour l'état en filtrant le personnage avec l'ID à supprimer
    // setAllCharacters(allCharacters.filter((character) => character.id !== id));
  }

  return (
    <>
      <h2 className="mb-6 text-4xl text-center">Tous nos combattants</h2>
      <div className="flex flex-wrap justify-center gap-8">
        { allCharacters.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-6">
            <h3 className="text-lg text-center">
              Il n'y a personne pour le moment
            </h3>
            <Link to="/creer-un-personnage">
              <button className="px-4 py-2 duration-300 border-2 border-neutral-800 bg-neutral-200 rounded-xl hover:bg-neutral-300">
                Créez un personnage en local si vous le souhaitez !
              </button>
            </Link>
          </div>
        ) : (allCharacters.map((oneCharacter) => (
          <Card
            key={oneCharacter.id}
            character={oneCharacter}
          />
        )))}
      </div>
      {/* test 1 */}
    </>
  );
}
