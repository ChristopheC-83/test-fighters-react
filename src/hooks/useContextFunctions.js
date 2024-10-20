import { nanoid as generateNanoId } from "nanoid";

const pathImg = "/assets/images/personnages/";

export function addHardCharacter(setHardCharacters) {
  setHardCharacters([
    {
      id: generateNanoId(6),
      image: pathImg + "heros.jpg",
      name: "Kikisan",
      health: 66,
      magic: 50,
      power: 40,
      from: "manualDatas",
      side: "light",
    },
    {
      id: generateNanoId(6),
      image: pathImg + "magicienne.jpg",
      name: "Dudulle",
      health: 57,
      magic: 47,
      power: 27,
      from: "manualDatas",
      side: "light",
    },
  ]);
}

export async function addFetchCharacters(setApiCharacters) {
  const url = "https://la-taverne.ducompagnon.fr/api/personnages";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setApiCharacters(data);
    // console.log(data); // Log les données récupérées

    const charactersWithImagePath = data.map((character) => ({
      ...character,
      id: generateNanoId(6),
      image: `${pathImg}${character.image}`,
      from: "apiDatas",
      side: character.side_name, // création de side qui prend side_name en valeur
    }));

    //  avec le rest parameter, on enlève side_name de l'objet
    //  en le capturant et en reconstruisant un objet avec le reste
    //  donc tout sauf side_name
    const wtihSideCharacters = charactersWithImagePath.map(
      ({ side_name, ...rest }) => rest
    );

    setApiCharacters(wtihSideCharacters); // Met à jour les personnages avec le chemin de l'image
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

export function addLocalCharacters(setLocalCharacters) {
  setLocalCharacters(JSON.parse(localStorage.getItem("characters")) || []);
}
