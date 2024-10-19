import { createContext, useContext, useState, useEffect } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { CharactersContext } from "../context/CharactersContext";

export default function LocalCharactersPage() {
  const { localCharacters } = useContext(CharactersContext);

  // console.log(localCharacters);

  return (
    <>
      <h2 className="my-6 text-4xl text-center">Nos Combattants Maison</h2>
      <div className="flex justify-center w-full my-10">
        <Link to="/creer-un-personnage">
          <button className="px-4 py-2 duration-300 bg-blue-300 border-2 border-blue-800 rounded-xl hover:opacity-80">
            Créer un Nouveau Combattant
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {localCharacters.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-6">
            <h3 className="text-lg text-center">
              Il n'y a personne pour le moment
            </h3>
            <Link to="/creer-un-personnage">
              <button className="px-4 py-2 duration-300 border-2 border-neutral-800 bg-neutral-200 rounded-xl hover:bg-neutral-300">
                Créez un personnage
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {localCharacters.map((oneCharacter) => (
              <Card
                key={oneCharacter.id}
                character={oneCharacter}
              />
            ))}
          </div>
        )}
      </div>
      <button
        className="px-4 py-2 my-6 border-2 rounded-xl border-neutral-800 bg-neutral-200 hover:opacity-90"
        onClick={() => {
          localStorage.removeItem("characters");
          fetchCharacters();
        }}
      >
        Supprimer les personnages
      </button>
    </>
  );
}
