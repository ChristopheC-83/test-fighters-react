import { useCharactersManager } from "../hooks/useCharactersManager";
import Statistiques from "./cardComponents/Statistiques";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

export default function Card({ character }) {
  // Récupérer les fonctions du contexte
  const { deleteCharacter, updateCharacter } = useCharactersManager();

  const allStat = [
    {
      stat: "Santé",
      value: character.health,
      unit: "PV",
    },
    {
      stat: "Magie",
      value: character.magic,
      unit: "PM",
    },
    {
      stat: "Puissance",
      value: character.power,
      unit: "Atk",
    },
  ];

  return (
    <div
      className={`flex flex-col border-neutral-500 border-2 w-[250px] h-[400px] rounded-xl ${character.side}Shadow overflow-hidden`}
    >
      <div className="w-[250px] h-[250px] overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="object-cover duration-300 hover:scale-105"
        />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="w-6"></div> {/* espace */}
          <p className="ml-4 text-xl text-center">
            <b>{character.name}</b>
          </p>
          <p className="text-xs text-gray-400 opacity-80">{character.from}</p>
        </div>
        {allStat.map((oneStat) => (
          <Statistiques
            key={oneStat.stat}
            stat={oneStat.stat}
            value={oneStat.value}
            unit={oneStat.unit}
          />
        ))}
      </div>
      <div className="flex justify-around">
        {character.from === "localDatas" ? (
          <Link to={`/modifier-personnage/${character.id}`}>
            <Buttons color="bg-green-500">Modifier</Buttons>
          </Link>
        ) : (
            <Buttons color="bg-green-500 cursor-not-allowed	">Ne pas Modifier</Buttons>
        )}
        <Buttons
          color="bg-red-500"
          onClick={() => deleteCharacter(character.id)}
        >
          Supprimer
        </Buttons>
      </div>
    </div>
  );
}
