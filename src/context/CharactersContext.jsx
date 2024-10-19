// on aura besoin de
import { createContext, useContext, useState, useEffect } from "react";
import {
  addLocalCharacters,
  addFetchCharacters,
  addHardCharacter,
} from "../hooks/useContextFunctions";

//  on initialise le contexte
export const CharactersContext = createContext();

// Crée le fournisseur/provider du contexte
const CharactersContextProvider = ({ children }) => {
  //  test
  const [valeurTest, setValeurTest] = useState(123);

  function doubleValeurTest() {
    setValeurTest(valeurTest * 2);
  }

  const [hardCharacters, setHardCharacters] = useState([]);
  const [apiCharacters, setApiCharacters] = useState([]);
  const [localCharacters, setLocalCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    addHardCharacter(setHardCharacters);
    addFetchCharacters(setApiCharacters);
    addLocalCharacters(setLocalCharacters);
  }, []);

  // useEffect pour mettre à jour allCharacters lorsque les autres listes changent
  useEffect(() => {
    setAllCharacters([...hardCharacters, ...apiCharacters, ...localCharacters]);
  }, [hardCharacters, apiCharacters, localCharacters]);

  return (
    // tout ce qui se trouvera dans le context pourra consommer, ici les characters
    // on pourrait mettre autre chose évidemment

    <CharactersContext.Provider
      value={{
        valeurTest,
        setValeurTest,
        doubleValeurTest,
        hardCharacters,
        setHardCharacters,
        apiCharacters,
        setApiCharacters,
        localCharacters,
        setLocalCharacters,
        allCharacters,
        setAllCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
