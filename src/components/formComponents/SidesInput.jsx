import { useState, useEffect } from "react";

export default function sidesInput({ side, setSide }) {
  const url = "https://la-taverne.ducompagnon.fr/api/classes";
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchSides();
  }, []);

  async function fetchSides() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setClasses(data);
      //console.log(data); 
    } catch (error) {
      console.error("Error fetching sides:", error);
    }
  }

  return (
    <div>
      <label className="block mb-2" htmlFor="side">
        Côté de la force :
      </label>
      <select
        id="side"
        value={side}
        onChange={(e) => setSide(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      >
        <option value="">🔽 Choisissez un côté 🔽</option>
        {classes.map((classe) => (
          <option key={classe.id} value={classe.side}>
            {classe.side}
          </option>
        ))}
      </select>
      {/* <input
        id="side"
        type="text"
        value={side}
        onChange={(e) => setSide(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      /> */}
    </div>
  );
}
