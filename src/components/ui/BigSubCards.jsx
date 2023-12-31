import React from 'react'

const BigSubCards = ({ images, title, onClick }) => {
  return (
    <div className=" container p-3">
      <div className="rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <a href={onClick} className="cursor-pointer">
          <img className="h-24 w-full rounded-t-lg object-cover" src={images} alt="" />
        </a>
        <div className="truncate p-2 text-center">
          <a
            href={onClick}
            className="text-md mb-2 overflow-hidden text-center font-bold capitalize tracking-wide text-gray-900 dark:text-white">
            {title}
          </a>
        </div>
      </div>
    </div>
  )
}

export default BigSubCards
