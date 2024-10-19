import Card from "../components/Card";
import React, { useContext, useEffect } from "react";
import { CharactersContext } from "../context/CharactersContext";
import { nanoid as generateNanoId } from "nanoid"; // Renommé pour éviter le conflit
import { Link } from "react-router-dom";

export default function HomePage() {
  const { valeurTest, setValeurTest, doubleValeurTest, hardCharacters } =
    useContext(CharactersContext);

  const nanoid = generateNanoId(6);
  // useEffect(() => {
  //   console.log(nanoid);
  //   console.log(hardCharacters);
  // }, [])

  return (
    <>
      <h2 className="mb-6 text-4xl text-center">Les invariables Fighters</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {hardCharacters.length === 0 ? (
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
          hardCharacters.map((oneCharacter) => (
            <Card key={oneCharacter.id} character={oneCharacter} />
          ))
        )}
      </div>
    </>
  );
}
