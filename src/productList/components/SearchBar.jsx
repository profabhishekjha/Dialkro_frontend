import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(false)
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false)

  const dropdownRef = useRef(null)
  const suggestionsDropdownRef = useRef(null)
  const allCategoriesButtonRef = useRef(null)

  const navigate = useNavigate()

  const categories = [
    'Couriers',
    'Hospitals',
    'Hotels',
    'Movers',
    'Rentals',
    'Transport',
    'Travels',
    'Dentist',
    'Gym',
    'Hostels',
    'Housings',
    'PestControl',
    'PetShop'
    // Add more categories as needed
  ]

  // Function to close the dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      allCategoriesButtonRef.current !== event.target
    ) {
      setIsAllCategoriesOpen(false)
    }
    if (suggestionsDropdownRef.current && !suggestionsDropdownRef.current.contains(event.target)) {
      setIsSuggestionsOpen(false)
    }
  }

  const handleSearchInputChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    // Filter categories based on the search query
    const filteredSuggestions = categories
      .filter((category) => category.toLowerCase().includes(query.toLowerCase()))
      .map((category) => category.replace(/categories$/i, '').trim())

    setSuggestions(filteredSuggestions)

    // Open the suggestions dropdown if there are suggestions
    setIsSuggestionsOpen(filteredSuggestions.length > 0)
  }

  const handleCategoryClick = (category) => {
    if (category.toLowerCase() === 'hospitals') {
      // Handle the special case for "Hospitals" with the "categories" suffix
      navigate(`/${category.toLowerCase()}category`)
    } else {
      // Check if the category has the "categories" suffix
      if (categories.includes(category)) {
        // Redirect with suffix
        navigate(`/${category.toLowerCase()}`)
      } else {
        // Redirect without suffix
        const categoryNameWithoutSuffix = category.toLowerCase()
        navigate(`/${categoryNameWithoutSuffix}`)
      }
    }

    setSearchQuery('')
    setSuggestions([])
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      const selectedCategory = suggestions[0].toLowerCase()
      if (selectedCategory === 'hospitals') {
        // Handle the special case for "Hospitals" with the "categories" suffix
        navigate(`/${selectedCategory}category`)
      } else {
        // Check if the category has the "categories" suffix
        if (categories.includes(selectedCategory)) {
          // Redirect with suffix
          navigate(`/${selectedCategory}`)
        } else {
          // Redirect without suffix
          navigate(`/${selectedCategory}`)
        }
      }

      setSearchQuery('')
      setSuggestions([])
    }
  }

  const handleSearchButtonClick = () => {
    // Redirect to the first suggestion when the search button is clicked
    if (suggestions.length > 0) {
      navigate(`/${suggestions[0].toLowerCase()}`)
      setSearchQuery('')
      setSuggestions([])
    }
  }

  const handleAllCategoryItemClick = (category) => {
    const selectedCategory = category.toLowerCase()
    if (selectedCategory === 'hospitals') {
      // Handle the special case for "Hospitals" with the "categories" suffix
      navigate(`/${selectedCategory}category`)
    } else {
      // Check if the category has the "categories" suffix
      if (categories.includes(selectedCategory)) {
        // Redirect with suffix
        navigate(`/${selectedCategory}`)
      } else {
        // Redirect without suffix
        navigate(`/${selectedCategory}`)
      }
    }

    setSearchQuery('')
    setSuggestions([])
  }

  const handleDropdownButtonClick = () => {
    setIsAllCategoriesOpen(!isAllCategoriesOpen)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    document.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className="z-20">
      <form className="flex items-center justify-center">
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:ring-blue-500 dark:border-black dark:bg-white dark:text-black "
            type="button"
            onClick={handleDropdownButtonClick}
            ref={allCategoriesButtonRef}>
            All categories
            <svg
              className={`ml-2.5 h-2.5 w-2.5 ${
                isAllCategoriesOpen ? 'rotate-180 transform' : '' // Rotate the arrow based on dropdown state
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
          </button>
          <div
            id="dropdown"
            ref={dropdownRef}
            className={`z-10 ${
              isAllCategoriesOpen ? 'block' : 'hidden'
            } right-100 absolute top-7 mt-8 max-h-60 w-36 divide-y divide-gray-100 overflow-y-auto rounded-lg bg-white shadow dark:bg-white`}>
            {' '}
            <ul
              className="py-2 text-sm text-gray-700 dark:text-black"
              aria-labelledby="dropdown-button">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => handleAllCategoryItemClick(category)}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-[25vw] rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:text-black dark:placeholder-gray-400 dark:hover:bg-gray-200 dark:focus:border-blue-500"
              placeholder="Search Transport, Couriers and more..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyDown={handleKeyPress}
              onClick={() => setIsSuggestionsOpen(!isSuggestionsOpen)}
              autoComplete="off"
            />
            <ul
              ref={suggestionsDropdownRef} // Reference to suggestions dropdown
              className={`${
                isSuggestionsOpen ? 'block' : 'hidden'
              } absolute top-7 z-10 mt-6 max-h-60 w-96 divide-y divide-gray-100 overflow-y-auto rounded-lg text-gray-700 shadow dark:bg-white dark:text-black`}>
              {suggestions.map((category, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {category}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="submit"
              className="absolute right-0 top-0 h-full rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSearchButtonClick}>
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
