import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SidesInput from "../components/formComponents/SidesInput";
import ImagesInput from "../components/formComponents/ImagesInput";
import GeneriqueInput from "../components/formComponents/GeneriqueInput";
import { toast } from "sonner";
import { useCharactersManager } from "../hooks/useCharactersManager";

export default function ModifyCharacterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { findCharacterById, updateCharacter } = useCharactersManager(); // Récupérer les fonctions du contexte

  const [character, setCharacter] = useState({
    name: "",
    image: "",
    health: "",
    magic: "",
    power: "",
    side: "",
  });

  // Récupérer le personnage à modifier
  useEffect(() => {
    const foundCharacter = findCharacterById(id);
    console.log(foundCharacter); // Pour déboguer

    if (foundCharacter) {
      setCharacter(foundCharacter.character);
      // Si tu veux utiliser la provenance, par exemple :
      console.log("Provenance:", foundCharacter.from);
    } else {
      toast.error("Personnage non trouvé");
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sécurisation
    if (character.from != "localDatas") {
      toast.error("Modification non autorisée pour ce personnage.");
      return;
    }
    console.log(character); // Pour tester puis... 
    
    // Mettre à jour le personnage en utilisant la fonction du contexte
    updateCharacter(character.id, character);
    toast.success("Personnage modifié avec succès");
    // Rediriger après modification
      navigate("/combattants-locaux");
  };

  return (
    <>
      <h2 className="my-3 text-xl text-center">
        Modifier le personnage {character.name}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl p-4 mx-auto border border-gray-300 rounded"
      >
        <GeneriqueInput
          constante={character.name}
          callback={(value) =>
            handleChange({ target: { name: "name", value } })
          }
          type="text"
          titre="Nom"
        />
        <ImagesInput
          image={character.image}
          setImage={(value) =>
            handleChange({ target: { name: "image", value } })
          }
        />
        <GeneriqueInput
          constante={character.health}
          callback={(value) =>
            handleChange({ target: { name: "health", value } })
          }
          type="number"
          titre="Santé"
        />
        <GeneriqueInput
          constante={character.magic}
          callback={(value) =>
            handleChange({ target: { name: "magic", value } })
          }
          type="number"
          titre="Magie"
        />
        <GeneriqueInput
          constante={character.power}
          callback={(value) =>
            handleChange({ target: { name: "power", value } })
          }
          type="number"
          titre="Puissance"
        />
        <SidesInput
          side={character.side}
          setSide={(value) => handleChange({ target: { name: "side", value } })}
        />
        <button type="submit" className="p-2 text-white bg-blue-500 rounded">
          Modifier le personnage
        </button>
      </form>
    </>
  );
}
