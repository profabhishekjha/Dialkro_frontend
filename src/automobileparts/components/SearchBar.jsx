import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlignmentSubCards from '../../components/ui/AlignmentSubCard'
import BigSubCards from '../../components/ui/BigSubCards'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleContentCount, setVisibleContentCount] = useState(5)
  // Your list of available content
  const section = 'autocare'
  const availableContent = [
    {
      images: `/${section}/periodicservices.webp`,
      prompt: 'Periodic Services'
    },
    {
      images: `/${section}/acrepair.webp`,
      prompt: 'Ac Services'
    },
    {
      images: `/${section}/batteries.webp`,
      prompt: 'Batteries'
    },
    {
      images: `/${section}/tyre.webp`,
      prompt: 'Tyres & Wheel Care'
    },
    {
      images: `/${section}/denting.webp`,
      prompt: 'Denting and Painting'
    },
    {
      images: `/${section}/detailing.webp`,
      prompt: 'Detailing Services'
    },
    {
      images: `/${section}/carspa.webp`,
      prompt: 'Car Spa & Cleaning'
    },
    {
      images: `/${section}/inspection.webp`,
      prompt: 'Car Inspection'
    },
    {
      images: `/${section}/windshields.webp`,
      prompt: 'Windshields'
    },
    {
      images: `/${section}/suspension.webp`,
      prompt: 'Suspension & Fitments'
    }
  ]
  const CustomServices = [
    {
      images: `/${section}/batteries.webp`,
      prompt: 'Batteries'
    },
    {
      images: `/${section}/brakes.webp`,
      prompt: 'Brakes'
    },
    {
      images: `/${section}/acrepair.webp`,
      prompt: 'Ac Parts'
    },
    {
      images: `/${section}/clutch.webp`,
      prompt: 'Clutch'
    },
    {
      images: `/${section}/tyre.webp`,
      prompt: 'Tyres'
    },
    {
      images: `/${section}/steering.webp`,
      prompt: 'Steering'
    },
    {
      images: `/${section}/goconnect.webp`,
      prompt: 'GoConnect 2.0'
    },
    {
      images: `/${section}/lights.webp`,
      prompt: 'Lights'
    },
    {
      images: `/${section}/body.webp`,
      prompt: 'Body Parts'
    },
    {
      images: `/${section}/windshields.webp`,
      prompt: 'Glasses'
    },
    {
      images: `/${section}/carspa.webp`,
      prompt: 'Car Spa'
    },
    {
      images: `/${section}/detailing.webp`,
      prompt: 'Car Detailing'
    }
  ]

  const filteredContent = availableContent.filter((content) =>
    content.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const filteredContentCurated = CustomServices.filter((content) =>
    content.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const mergedContent = [...filteredContent, ...filteredContentCurated]
  const filterContent = mergedContent.filter((content) =>
    content.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const handleSuggestionClick = () => {
    // Handle the card click here, e.g., navigate to the corresponding route
    navigate('/autocarecategory')
  }

  const handleEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      // Enter key pressed
      redirectToFirstSuggestion()
    }
  }
  // Function to automatically redirect to the first suggestion
  const redirectToFirstSuggestion = () => {
    const mergedContent = [...filteredContent, ...filteredContentCurated]
    if (mergedContent.length > 0) {
      handleSuggestionClick(mergedContent[0])
    }
  }

  // Render the filtered content
  const renderFilteredContent = () => {
    if (filterContent.length === 0) {
      return (
        <div className="ml-16 flex items-center justify-center gap-10">
          <p>No matching content found.</p>
        </div>
      )
    }

    const handleViewMoreClick = () => {
      // Show 5 more cards when the "View More" button is clicked
      setVisibleContentCount((prevCount) => prevCount + 5)
    }

    return (
      <div className="flex w-full flex-col gap-16">
        <div className="flex w-full items-center justify-center">
          <div className=" flex w-[70%] flex-col items-center justify-center gap-2">
            <div className="ml-6 w-full gap-3 border-b border-gray-400 text-4xl font-bold tracking-wide">
              <p>Car Services Available in Dialkro</p>
            </div>
            <div className="grid items-center justify-center max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredContent.slice(0, visibleContentCount).map((content, index) => (
                <div key={index}>
                  <BigSubCards
                    images={content.images}
                    title={content.prompt}
                    onClick={() => handleSuggestionClick(content)}
                  />
                </div>
              ))}
            </div>
            {filteredContent.length > visibleContentCount && (
              <div className="mt-7 flex items-end justify-end">
                <button
                  onClick={handleViewMoreClick}
                  className="h-10 w-40 rounded-md bg-blue-500 text-white hover:bg-blue-400">
                  View More Category
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className=" flex w-[70%] flex-col items-center justify-center gap-5">
            <div className="ml-6 w-full gap-3 border-b border-gray-400 text-4xl font-bold tracking-wide">
              <p>Curated Custom Services</p>
            </div>
            <div className="grid items-center justify-center max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredContentCurated.slice(0, visibleContentCount).map((content, index) => (
                <div key={index}>
                  <BigSubCards
                    images={content.images}
                    title={content.prompt}
                    onClick={() => handleSuggestionClick(content)}
                  />
                </div>
              ))}
            </div>
            {filteredContent.length > visibleContentCount && (
              <div className="mt-7 flex items-end justify-end">
                <button
                  onClick={handleViewMoreClick}
                  className="h-10 w-40 rounded-md bg-blue-500 text-white hover:bg-blue-400">
                  View More Category
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container flex flex-col gap-10">
      <div className="flex items-center justify-center">
        <form className="mt-3 w-96 px-6">
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
      </div>
      <div className="flex items-start justify-start">{renderFilteredContent()}</div>
    </div>
  )
}

export default SearchBar
