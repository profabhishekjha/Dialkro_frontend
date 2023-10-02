import React, { useState } from 'react'

const DropdownMenu = ({ prompt, image, options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="redborder container my-[28vh] flex flex-wrap items-center justify-center">
          <div className="inline-block text-left">
            <div>
              <div
                type="text"
                className="flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-black "
                onClick={toggleDropdown}>
                <div className="flex items-center">
                  <img
                    src={image} // Replace with your image URL
                    alt="Image Placeholder"
                    className="mr-2 h-14"
                  />
                  {prompt}
                </div>
                <svg
                  className={`ml-2.5 h-2.5 w-2.5 transform transition-transform ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
            </div>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-44 divide-y divide-gray-100 rounded-lg bg-white py-2 shadow dark:bg-gray-700">
                <ul
                  className="text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton">
                  {options.map((option, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        {option}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DropdownMenu
