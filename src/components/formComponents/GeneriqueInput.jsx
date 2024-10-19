import { useState } from "react";

export default function GeneriqueInput({constante, callback, type, titre}) {

    
  return (
    <div>
          <label className="block mb-2" htmlFor={constante}>
            {titre} :
          </label>
          <input
            type={type}
            id={constante}
            value={constante}
            onChange={(e) => callback(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
        </div>
  )
}
