import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import { CharactersContext } from "../context/CharactersContext";
import { addFetchCharacters } from "../hooks/useContextFunctions";
import React from "react";
import { Link } from "react-router-dom";

export default function ApiCharactersPage() {
  const { apiCharacters, setApiCharacters } = useContext(CharactersContext);
  const [bateau, setBateau] = useState(0);
  console.log(apiCharacters);

  return (
    <>
      <h2 className="mb-6 text-4xl text-center">
        Tous les Combattants de l'API
      </h2>
      {/* <p
          onClick={() => {
            setBateau(bateau + 1);
          }}
          className="my-5 cursor-pointer"
        >
          Valeur bateau : {bateau}
        </p> */}

      <div className="flex flex-wrap justify-center gap-8">
        {apiCharacters.length === 0 ? (
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
        ) : (
          apiCharacters.map((oneCharacter) => (
            <Card key={oneCharacter.id} character={oneCharacter} />
          ))
        )}
      </div>
      <div className="flex justify-center w-full my-8">
        <button
          className="px-4 py-2 duration-300 bg-blue-200 border-2 border-blue-800 rounded-xl hover:bg-blue-300"
          onClick={() => addFetchCharacters(setApiCharacters)}
        >
          Rappeler tous les Combattants de l'API !
        </button>
      </div>
    </>
  );
}
