import React from 'react'

export default function Buttons({color, children, onClick}) {


  return (
    <button className={`px-2 py-1 mb-2 duration-300 ${color} border-2 border-neutral-400 rounded-xl hover:opacity-90 hover:border-neutral-700`} onClick={onClick}>
          {children}
        </button>
  )
}
