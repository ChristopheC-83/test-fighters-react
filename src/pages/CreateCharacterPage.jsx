import { useState, useContext } from "react";
import SidesInput from "../components/formComponents/SidesInput";
import ImagesInput from "../components/formComponents/ImagesInput";
import GeneriqueInput from "../components/formComponents/GeneriqueInput";
import { toast } from "sonner";

import { nanoid as generateNanoId } from "nanoid";
import { CharactersContext } from "../context/CharactersContext";

export default function CreateCharacterPage() {

  const { setLocalCharacters } = useContext(CharactersContext);
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [health, setHealth] = useState("");
  const [magic, setMagic] = useState("");
  const [power, setPower] = useState("");
  const [side, setSide] = useState("");
  const [from, setFrom] = useState("localDatas");

  function testName(name) {
    if (name.length < 3) {
      toast.error("Le nom doit contenir au moins 3 caractères");
      return false; // Indique que le nom n'est pas valide
    }
    return true; // Indique que le nom est valide
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!testName(name)) {
      return; // Si le nom n'est pas valide, on arrête le processus
    }

    // Créer un objet personnage
    const newCharacter = {
      id: generateNanoId(6),
      name,
      image,
      health: parseInt(health), // Convertir en entier
      magic: parseInt(magic), // Convertir en entier
      power: parseInt(power), // Convertir en entier
      side,
      from,
    };

    // Phase 1, on teste le formulaire bourrin
    // console.log(newCharacter);

    // phase 2
    // Récupérer les personnages existants dans le localStorage
    const oldCharacters = JSON.parse(localStorage.getItem("characters")) || [];
    const oldLength = oldCharacters.length;
    // Ajouter le nouveau personnage
    oldCharacters.push(newCharacter);

    // Sauvegarder les personnages dans le localStorage
    localStorage.setItem("characters", JSON.stringify(oldCharacters));

    const newLength = oldCharacters.length;
    if (newLength > oldLength) {
      toast.success("Personnage créé avec succès");
    } else {
      toast.error("Erreur lors de la création du personnage");
    }
    setLocalCharacters(oldCharacters);
    // Réinitialiser le formulaire
    setName("");
    setImage("");
    setHealth("");
    setMagic("");
    setPower("");
    setSide("");
  };

  return (
    <>
      <h2 className="my-3 text-xl text-center">
        Créons un nouveau combattants
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl p-4 mx-auto border border-gray-300 rounded"
      >
        {/* nom */}
        <GeneriqueInput
          constante={name}
          callback={setName}
          type="text"
          titre="Nom"
        />
        {/* image */}
        <ImagesInput image={image} setImage={setImage} />
        {/* stat */}
        <GeneriqueInput
          constante={health}
          callback={setHealth}
          type="number"
          titre="Santé"
        />
        <GeneriqueInput
          constante={magic}
          callback={setMagic}
          type="number"
          titre="Magie"
        />
        <GeneriqueInput
          constante={power}
          callback={setPower}
          type="number"
          titre="Puissance"
        />
        {/* classe */}
        <SidesInput side={side} setSide={setSide} />
        <button type="submit" className="p-2 text-white bg-blue-500 rounded">
          Créer le personnage
        </button>
      </form>
    </>
  );
}
