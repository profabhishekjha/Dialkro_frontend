import React from 'react'

const BigSubCards = ({ images, title }) => {
  return (
    <div className="container p-10">
      <div className="w-[25vw] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <a href="#">
          <img className="h-32 w-full rounded-t-lg object-cover" src={images} alt="" />
        </a>
        <div className="p-3 text-center">
          <a href="#">
            <a
              href=""
              className="mb-2 text-center text-xl font-bold capitalize tracking-wide text-gray-900 dark:text-white">
              {title}
            </a>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BigSubCards
