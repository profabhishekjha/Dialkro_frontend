import React from 'react'

const Ratings = () => {
  return (
    <div>
      {' '}
      {/* ratings */}
      <div className="">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-500">
            <svg
              className="absolute -left-1 h-12 w-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="px-">
            <p className="text-[1.3rem] font-bold">Hitesh</p>
            <h1>16 Ratings</h1>
          </div>
        </div>
        <p className="py-3">⭐⭐⭐⭐⭐</p>
        <p>
          Food Is superb and very delicious for vegetarians it is the very best place to visit and
          and food is very fresh and very friendly staff and service also very fast even the non
          vegetarian will love it every flavour was easily sensing the taste i loved it
        </p>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      </div>
      {/* ratings */}
    </div>
  )
}

export default Ratings
