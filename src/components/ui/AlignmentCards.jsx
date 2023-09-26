/* eslint-disable react/prop-types */
import React from 'react'

const AlignmentCards = ({ images, prompt, onClick }) => {
  return (
    <div className="z-10 flex items-center justify-center overflow-hidden">
      <div className="relative overflow-hidden p-2">
        <div className=" relative mx-auto h-24 w-32 overflow-hidden rounded-lg bg-white shadow-lg duration-500 hover:scale-105 ">
          <a onClick={onClick} className="cursor-pointer">
            <img className=" h-24 w-full object-cover " src={images} alt="Card Image" />
            <figcaption className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-100 px-4 text-black opacity-0 transition-all hover:text-xl hover:font-bold hover:opacity-60">
              <p className=" text-center text-lg uppercase ">{prompt}</p>
            </figcaption>
          </a>
        </div>
        <h1 className="text-md overflow-hidden text-center font-bold capitalize text-slate-500">
          {' '}
          {prompt}
        </h1>
      </div>
    </div>
  )
}

export default AlignmentCards
