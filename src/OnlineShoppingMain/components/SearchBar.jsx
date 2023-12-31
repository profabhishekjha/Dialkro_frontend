import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BigSubCards from '../../components/ui/BigSubCards'
import Card from '../../components/Card'
import { faker } from '@faker-js/faker'
import Section from '../../components/Section'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleContentCount, setVisibleContentCount] = useState(5)
  // Your list of available content
  const availableContent = [
    {
      images: '/onlineshoppingCarousel/groceries.webp',
      prompt: 'groceries',
      onClick: '/online/groceries'
    },
    {
      images: '/onlineshoppingCarousel/clothing.webp',
      prompt: 'Fashion',
      onClick: '/online/clothing'
    },
    {
      images: '/onlineshoppingCarousel/electronics.webp',
      prompt: 'electronics',
      onClick: '/online/electronics'
    },
    {
      images: '/onlineshoppingCarousel/movies.webp',
      prompt: 'movies',
      onClick: '/online/movies'
    },
    {
      images: '/onlineshoppingCarousel/furniture.webp',
      prompt: 'furniture',
      onClick: '/online/furniture'
    }
  ]

  const filteredContent = availableContent.filter((content) =>
    content.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  )

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

    const handleViewMoreClick = () => {
      // Show 5 more cards when the "View More" button is clicked
      setVisibleContentCount((prevCount) => prevCount + 5)
    }

    function CardList() {
      const cards = []
      for (let i = 0; i < 10; i++) {
        cards.push(
          <Card
            id={i}
            heading={faker.commerce.productName()}
            description={faker.commerce.productDescription()}
            companyName={faker.company.buzzVerb()}
            image={faker.image.url()}
            price={faker.commerce.price()}
            rating={faker.number.float({ min: 1, max: 5, precision: 0.1 })}
            reviews={faker.number.int({ max: 10000 })}
          />
        )
      }
      return cards
    }
    const cards = CardList()

    return (
      <div className="flex w-full flex-col gap-16">
        <div className="flex w-full items-center justify-center">
          <div className=" flex w-[70%] flex-col items-center justify-center gap-2">
            <div className="ml-6 w-full gap-3 border-b border-gray-400 text-4xl font-bold tracking-wide">
              <p>B2B Services Available in Dialkro</p>
            </div>
            <div className="grid items-center justify-center max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredContent.slice(0, visibleContentCount).map((content, index) => (
                <div key={index}>
                  <BigSubCards
                    images={content.images}
                    title={content.prompt}
                    onClick={content.onClick}
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

        <div className=" flex w-full flex-col items-center justify-center gap-10">
          <Section FirstHeading="Top Deals" cards={cards} isCardCarousel={true} />
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
