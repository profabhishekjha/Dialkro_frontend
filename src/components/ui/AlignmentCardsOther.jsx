/* eslint-disable react/prop-types */
import React from 'react'

const AlignmentCardsOther = ({ images, prompt, onClick }) => {
  return (
    <div className="z-10 flex items-center justify-center duration-500 hover:scale-110">
      <div className="relative p-2">
        <div className="relative mx-auto h-40 w-52 overflow-hidden rounded-lg bg-white shadow-lg">
          <a onClick={onClick} className="cursor-pointer">
            <img className="h-40 w-full object-cover" src={images} alt="Card Image" />
            <figcaption className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-100 px-4 text-black opacity-0 transition-all hover:text-xl hover:font-bold hover:opacity-60">
              <p className="text-center uppercase ">{prompt}</p>
            </figcaption>
          </a>
        </div>
        <h1 className="text-md overflow-hidden font-bold capitalize text-slate-500"> {prompt}</h1>
      </div>
    </div>
  )
}

export default AlignmentCardsOther
