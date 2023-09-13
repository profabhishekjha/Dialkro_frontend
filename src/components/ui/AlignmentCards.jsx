/* eslint-disable react/prop-types */
import React from 'react'

const AlignmentCards = ({ images, prompt, onClick }) => {
  return (
    <div className="z-10 flex">
      <div className="relative p-3">
        <div className=" relative mx-auto h-32 w-48 overflow-hidden rounded-lg bg-white shadow-lg">
          <a href="" onClick={onClick}>
            <img className="h-32 w-full object-cover" src={images} alt="Card Image" />
            <figcaption className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-100 px-4 text-black opacity-0 transition-all hover:text-xl hover:font-bold hover:opacity-60">
              <p className="text-center uppercase ">{prompt}</p>
            </figcaption>
          </a>
        </div>
        <h1 className="overflow-hidden text-lg font-bold capitalize text-slate-500"> {prompt}</h1>
      </div>
    </div>
  )
}

export default AlignmentCards
