import { useState, useEffect } from "react";

import React from "react";

export default function ImagesInput({ image, setImage }) {
  const url = "https://la-taverne.ducompagnon.fr/api/images";
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setImages(data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  return (
    <div>
      <label className="block mb-2" htmlFor="image">
        Avatar :
      </label>
      <select
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      >
        <option value="">🔽 Choisissez une image 🔽</option>
        {images.map((image, index) => (
          <option key={index} value={image.url}>
            {image.name}
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
