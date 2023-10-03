import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BigSubCards from '../../components/ui/BigSubCards'
import Section from '../../components/Section'
import Card from '../../components/Card'
import { faker } from '@faker-js/faker'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleContentCount, setVisibleContentCount] = useState(5)
  // Your list of available content

  const availableContent = [
    {
      images: '/b2bCarousel/engineparts.webp',
      title: 'Engine Parts',
      onClick: '/engineparts'
    },
    {
      images: '/b2bCarousel/agricultureequipment.webp',
      title: 'Agriculture Tools',
      onClick: '/agriculturetools'
    },
    {
      images: '/b2bCarousel/agriculturemachinery.webp',
      title: 'Agriculture Machinery',
      onClick: '/agriculturemachinery'
    },
    {
      images: '/b2bCarousel/electricalcomponents.webp',
      title: 'Electrical Component',
      onClick: '/electricalcomponents'
    },
    {
      images: '/b2bCarousel/rubber.webp',
      title: 'Rubber',
      onClick: '/refrigeratorCategories'
    },
    {
      images: '/b2bCarousel/airfilter.webp',
      title: 'Air Filter',
      onClick: '/tvCategories'
    },
    {
      images: '/b2bCarousel/cabinet.webp',
      title: 'Cabinet',
      onClick: '/chimneyCategories'
    },

    {
      images: '/b2bCarousel/handtools.webp',
      title: 'Hand Tools',
      onClick: '/pestcontrolCategories'
    },
    {
      images: '/b2bCarousel/lightbulb.webp',
      title: 'Light Bulbs',
      onClick: '/kitchenCategories'
    },
    {
      images: '/b2bCarousel/protective-equipment.webp',
      title: 'Protective Equipment',
      onClick: '/kitchenCategories'
    },
    {
      images: '/b2bCarousel/resistor.webp',
      title: 'Resistors',
      onClick: '/kitchenCategories'
    },
    {
      images: '/b2bCarousel/scaffolding.webp',
      title: 'Scaffoldings',
      onClick: '/kitchenCategories'
    },
    {
      images: '/b2bCarousel/treadmill.webp',
      title: 'Tread Mill',
      onClick: '/kitchenCategories'
    },
    {
      images: '/b2bCarousel/truckpart.webp',
      title: 'Truck Parts',
      onClick: '/kitchenCategories'
    },
    {
      images: '/b2bCarousel/water-pump.webp',
      title: 'Water Pumps',
      onClick: '/kitchenCategories'
    }
  ]
  const filteredContent = availableContent.filter((content) =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      // Enter key pressed
      redirectToFirstSuggestion()
    }
  }
  // Function to automatically redirect to the first suggestion
  const redirectToFirstSuggestion = () => {
    const mergedContent = [...filteredContent]
    if (mergedContent.length > 0) {
      handleSuggestionClick(mergedContent[0])
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
                    title={content.title}
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
          <Section FirstHeading="Engine Parts" cards={cards} isCardCarousel={true} />
          <Section FirstHeading="Engine Oils" cards={cards} isCardCarousel={true} />
          <Section FirstHeading="Basic Parts" cards={cards} isCardCarousel={true} />
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
