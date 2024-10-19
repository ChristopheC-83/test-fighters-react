import { useState } from "react";

//  on va utiliser le state pour un affichage en temps réel
export default function SpreadOp() {
  // on commence par un tableau simple
  // on va ajouter des éléments à ce tableau
  // on va donc utiliser setTableau pour mettre à jour le tableau
  // come valuer, on va utiliser le spread operator pour ajouter des éléments
  // on va ajouter 4, 5 et 6 aux éléments existants
  // où on va ajouter tableau.length+1 et tableau.length+2
  // si on change de page, on revient à 1, 2, 3
  // le state est réinitialisé car local à la page
  //  on pourrait garder l'état s'il était sauvegardé dans le localStorage ou dans un contexte
  //  nous y reviendrons plus tard
  const [tableau, setTableau] = useState([1, 2, 3]);

  //    autre exemple, on va utiliser le spread operator pour mettre à jour un objet
  //    on va ajouter une propriété city à un objet
  //    on va utiliser une fonction pour mettre à jour l'objet
  //    on va utiliser map pour parcourir les objets
  //    on va utiliser le spread operator pour ajouter la propriété city

  const [person, setPerson] = useState({
    name: "bouille",
    age: 25,
  });

  //    dernier exemple, on va utiliser le spread operator pour mettre à jour un tableau d'objets
  //    on va ajouter une propriété city à un objet
  //    on va utiliser une fonction pour mettre à jour l'objet
  //    on va utiliser map pour parcourir les objets
  //    on va utiliser le spread operator pour ajouter la propriété city

  //  j'espère que le spread operator est plus clair pour vous maintenant !

  const [persons, setPersons] = useState([
    {
      name: "kiki",
      age: 25,
    },
    {
      name: "dulle",
      age: 25,
    },
  ]);

  //   on ajoute des données à des personnages
  function updatePerson(name, newCity) {
    setPersons(
      persons.map((person) =>
        person.name === name ? { ...person, city: newCity } : person
      )
    );
  }
  // on ajoute un personnage
  function addPerson() {
    setPersons([...persons, { name: "Crapaud", age: 16, city: "Lille" }]);
  }

  return (
    <div>
      {tableau.map((item) => (
        <div key={item}>{item}</div>
      ))}
      <button
        className="p-3 m-6 bg-cyan-300"
        onClick={() => setTableau([...tableau, 4, 5, 6])}
      >
        Ajoute 4, 5, 6
      </button>
      <button
        className="p-3 m-6 bg-cyan-300"
        onClick={() => setTableau([...tableau, tableau.length+1, tableau.length+2])}
      >
        Ajoute 2 chiffres
      </button>
      <br />
      {/* ##################################################################### */}
      Je m'appelle {person.name} et j'ai {person.age} ans{" "}
      {person.city && <>et j'habite à {person.city}</>}
      <br />
      <button
        className="p-3 m-6 bg-cyan-300"
        onClick={() => setPerson({ ...person, city: "Lyon" })}
      >
        Add City
      </button>
      {/* ##################################################################### */}
      {persons.map((person) => (
        <div key={person.name}>
          Je m'appelle {person.name} et j'ai {person.age} ans{" "}
          {person.city && <>et j'habite à {person.city}</>}
        </div>
      ))}
      <button
        className="p-3 m-6 bg-cyan-300"
        onClick={() => updatePerson("kiki", "Paris")}
      >
        Add City to Kiki
      </button>
      <button
        className="p-3 m-6 bg-cyan-300"
        onClick={() => updatePerson("dulle", "Montpellier")}
      >
        Add City to Dulle
      </button>
      <button className="p-3 m-6 bg-cyan-300" onClick={() => addPerson()}>
        Add Person
      </button>
    </div>
  );
}
