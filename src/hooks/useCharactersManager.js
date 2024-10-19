import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

export function useCharactersManager() {
  const {
    hardCharacters,
    setHardCharacters,
    apiCharacters,
    setApiCharacters,
    localCharacters,
    setLocalCharacters,
  } = useContext(CharactersContext);

  function findCharacterById(id) {
    const sources = [
      { data: hardCharacters, from: "manualDatas" },
      { data: apiCharacters, from: "apiDatas" },
      { data: localCharacters, from: "localDatas" },
    ];

    for (const { data, from } of sources) {
      const character = data.find((char) => char.id === id);
      if (character) {
        return { character, from };
      }
    }

    return null; // Si le personnage n'est pas trouvé
  }

  function updateCharacter(id, updatedCharacter) {
    const storedCharacters = JSON.parse(localStorage.getItem("characters")) || [];

    // Chercher le personnage et son index par ID dans le localStorage
    const characterIndex = storedCharacters.findIndex(char => char.id === id);
    console.log(characterIndex);
    //  a t on bien un personnage ? dans un tableau, il n'y a pas d'index -1 !
    if (characterIndex !== -1) {
      // Mise à jour de l'objet du personnage cible
      //  on avance ses données et on écrase avec les nouvelles données
      storedCharacters[characterIndex] = {
        ...storedCharacters[characterIndex],
        ...updatedCharacter,
      };
      // on renvoit tout au localStorage!
      localStorage.setItem("characters", JSON.stringify(storedCharacters));
      setLocalCharacters(storedCharacters);
    } else {
      console.error("Personnage non trouvé dans localStorage");
    }


  }

  function deleteCharacterFromLocalStorage(id) {
    const storedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];
    const updatedStoredCharacters = storedCharacters.filter(
      (char) => char.id !== id
    );
    localStorage.setItem("characters", JSON.stringify(updatedStoredCharacters));
  }

  function deleteCharacter(id) {
    const characterData = findCharacterById(id);

    if (!characterData) {
      console.error("Personnage non trouvé");
      return;
    }

    const { character, from } = characterData;

    // Mettre à jour la bonne liste en fonction de la provenance
    switch (from) {
      case "manualDatas": {
        const updatedCharacters = hardCharacters.filter(
          (char) => char.id !== id
        );
        setHardCharacters(updatedCharacters);
        break;
      }
      case "apiDatas": {
        const updatedCharacters = apiCharacters.filter(
          (char) => char.id !== id
        );
        setApiCharacters(updatedCharacters);
        break;
      }
      case "localDatas": {
        const updatedCharacters = localCharacters.filter(
          (char) => char.id !== id
        );
        setLocalCharacters(updatedCharacters);
        deleteCharacterFromLocalStorage(id);
        break;
      }
      default:
        console.error("Provenance inconnue pour le personnage :", character);
    }
  }

  return { deleteCharacter, findCharacterById, updateCharacter };
}
