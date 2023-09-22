/* eslint-disable react/prop-types */
import React from 'react'

const Cards = ({ images, heading, description, onClick }) => {
  return (
    <div onClick={onClick} className=" cursor-pointer">
      <div className="redborder max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-blue-800 hover:dark:bg-blue-600">
        <a onClick={onClick}>
          <img className="h-60 rounded-t-lg" src={images} alt="lorem" />
        </a>
        <div className="p-5">
          <a onClick={onClick}>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {heading}
            </h1>
          </a>
          <p className=" mb-3 w-full font-normal text-white dark:text-white">{description}</p>
          <a
            onClick={onClick}
            className="inline-flex items-center rounded-lg bg-black px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-black dark:bg-black dark:hover:bg-neutral-800 dark:focus:ring-blue-800">
            Explore More
            <svg
              className="ml-2 h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards
