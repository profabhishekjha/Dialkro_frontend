import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BigSubCards from '../../components/ui/BigSubCards'
import Cards from '../../components/ui/Cards'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleBigCardsCount, setVisibleBigCardsCount] = useState(6)
  // Your list of available content

  const bigSubCardsData = [
    {
      images: '/b2bCarousel/axe.webp',
      title: 'Axe',
      onClick: () => navigate('/refrigeratorCategories')
    },
    {
      images: '/b2bCarousel/airfilter.webp',
      title: 'Air Filter',
      onClick: () => navigate('/tvCategories')
    },
    {
      images: '/b2bCarousel/cabinet.webp',
      title: 'Cabinet',
      onClick: () => navigate('/chimneyCategories')
    },
    {
      images: '/b2bCarousel/electricalcomponents.webp',
      title: 'Electrical Component',
      onClick: () => navigate('/waterpurifierCategories')
    },
    {
      images: '/b2bCarousel/handtools.webp',
      title: 'Hand Tools',
      onClick: () => navigate('/pestcontrolCategories')
    },
    {
      images: '/b2bCarousel/lightbulb.webp',
      title: 'Light Bulbs',
      onClick: () => navigate('/kitchenCategories')
    },
    {
      images: '/b2bCarousel/protective-equipment.webp',
      title: 'Protective Equipment',
      onClick: () => navigate('/kitchenCategories')
    },
    {
      images: '/b2bCarousel/resistor.webp',
      title: 'Resistors',
      onClick: () => navigate('/kitchenCategories')
    },
    {
      images: '/b2bCarousel/scaffolding.webp',
      title: 'Scaf Foldings',
      onClick: () => navigate('/kitchenCategories')
    },
    {
      images: '/b2bCarousel/treadmill.webp',
      title: 'Tread Mill',
      onClick: () => navigate('/kitchenCategories')
    },
    {
      images: '/b2bCarousel/truckpart.webp',
      title: 'Truck Parts',
      onClick: () => navigate('/kitchenCategories')
    },
    {
      images: '/b2bCarousel/water-pump.webp',
      title: 'Water Pumps',
      onClick: () => navigate('/kitchenCategories')
    },
    {
      images: '/b2bCarousel/water-pump.webp',
      title: 'Water Pumps',
      onClick: () => navigate('/kitchenCategories')
    },
    {
      images: '/b2bCarousel/water-pump.webp',
      title: 'Water Pumps',
      onClick: () => navigate('/kitchenCategories')
    },
    {
      images: '/b2bCarousel/water-pump.webp',
      title: 'Water Pumps',
      onClick: () => navigate('/kitchenCategories')
    }
  ]

  const handleViewMoreBigCardsClick = () => {
    setVisibleBigCardsCount((prevCount) => prevCount + 6) // Increase by 6 on each click
  }
  // Render the filtered content

  return (
    <div className="flex w-full flex-col gap-16">
      <div className=" flex w-full items-center justify-center">
        <div className=" flex w-[80%] flex-col items-center justify-center gap-5">
          <div className="ml-6 w-full gap-3 border-b border-gray-400 text-4xl font-bold tracking-wide">
            <p>Dialkro's B2B Services</p>
          </div>
          <div className=" grid items-center justify-center gap-4 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {bigSubCardsData.slice(0, visibleBigCardsCount).map((card, index) => (
              <BigSubCards
                key={index}
                images={card.images}
                title={card.title}
                onClick={card.onClick}
              />
            ))}
          </div>
          {visibleBigCardsCount < bigSubCardsData.length && (
            <div className=" mt-7 flex w-full items-center justify-center">
              <button
                onClick={handleViewMoreBigCardsClick}
                className="h-10 w-44 rounded-md bg-blue-500 text-white hover:bg-blue-400">
                View More Category
              </button>
            </div>
          )}
        </div>
      </div>
      <div className=" flex w-full flex-col items-center justify-center">
        <div className="flex w-[80%] flex-col items-center justify-center gap-5">
          <div className="ml-6 w-full gap-3 border-b border-gray-400 text-4xl font-bold tracking-wide">
            <p>Dialkro's Most Popular Services</p>
          </div>
          <div className="grid items-center justify-center gap-20 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Cards
              images={`/homeservice/tv.webp`}
              heading={`Television`}
              description={'We offer one of the best TV services in India'}
              onClick={() => {
                navigate('/tvservices')
              }}
            />
            <Cards
              images={`/homeservice/refrigerator.webp`}
              heading={`Refrigerator`}
              description={'We offer one of the best Refrigerator services in India'}
              onClick={() => {
                navigate('/refrigeratorservices')
              }}
            />
            <Cards
              images={`/homeservice/kitchen.webp`}
              heading={`Kitchen Deep Cleaning`}
              description={'We offer one of the best Home Services services in India'}
              onClick={() => {
                navigate('/kitchenservices')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
