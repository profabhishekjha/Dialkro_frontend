import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlignmentCards from '../../../components/ui/AlignmentCards'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  // Your list of available content
  const availableContent = [
    {
      images: '/Restaurant/southIndian.webp',
      prompt: 'South Indian'
    },
    {
      images: '/Restaurant/globalcuisines.webp',
      prompt: 'Global Cuisines'
    },
    {
      images: '/Restaurant/nightlife.webp',
      prompt: 'Night Life'
    },
    {
      images: '/Restaurant/quickbites.webp',
      prompt: 'Quick Bites'
    },
    {
      images: '/Restaurant/sweettooth.webp',
      prompt: 'Sweet Tooth'
    },
    {
      images: '/Restaurant/foodie.webp',
      prompt: 'Foodie'
    }
  ]

  const filteredContent = availableContent.filter((content) =>
    content.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSuggestionClick = () => {
    // Handle the card click here, e.g., navigate to the corresponding route
    navigate('/restaurant')
  }

  const handleEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      // Enter key pressed
      redirectToFirstSuggestion()
    }
  }
  // Function to automatically redirect to the first suggestion
  const redirectToFirstSuggestion = () => {
    if (filteredContent.length > 0) {
      handleSuggestionClick(filteredContent[0])
    }
  }

  // Render the filtered content
  const renderFilteredContent = () => {
    if (filteredContent.length === 0) {
      return (
        <div className="ml-16 flex items-center justify-center gap-10">
          <p>No matching content found.</p>
        </div>
      )
    }

    return (
      <div className="flex flex-wrap items-center justify-center">
        {filteredContent.map((content, index) => (
          <div key={index}>
            <AlignmentCards
              images={content.images}
              prompt={content.prompt}
              onClick={() => handleSuggestionClick}
            />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-10">
      <form className="mt-3 max-w-sm px-6">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md border bg-gray-50 py-2 pl-12 pr-4 text-gray-500 outline-none focus:border-indigo-600 focus:bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onBlur={redirectToFirstSuggestion}
            onKeyDown={handleEnterKeyPress}
          />
        </div>
      </form>
      <div className="flex items-start justify-start">{renderFilteredContent()}</div>
    </div>
  )
}

export default SearchBar
