/* eslint-disable react/prop-types */
import React from 'react'

const AlignmentSubCards = ({ images, prompt, onClick }) => {
  return (
    <div className=" z-10 flex duration-500 hover:scale-110">
      <div className="relative flex h-44 flex-col items-start justify-start p-3">
        <div className=" relative h-24 w-32 overflow-hidden rounded-lg bg-white shadow-lg">
          <a href={onClick} className=" cursor-pointer">
            <img className=" h-24 w-full object-cover" src={images} alt="Card Image" />
            <figcaption className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-100 px-4 text-black opacity-0 transition-all hover:text-sm hover:font-bold hover:opacity-60">
              <p className="text-center uppercase ">{prompt}</p>
            </figcaption>
          </a>
        </div>
        <h1
          className="  w-32 overflow-hidden text-center text-sm font-bold capitalize text-slate-500"
          style={{
            overflowWrap: 'break-word', // Word wrapping
            wordWrap: 'break-word', // Word wrapping (for older browsers)
            whiteSpace: 'normal' // Allow wrapping
          }}>
          {' '}
          {prompt}
        </h1>
      </div>
    </div>
  )
}

export default AlignmentSubCards
