import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BigSubCards from '../../components/ui/BigSubCards'
import Cards from '../../components/ui/Cards'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleContentCount, setVisibleContentCount] = useState(6)
  // Your list of available content
  const handleSuggestionClick = () => {
    // Handle the card click here, e.g., navigate to the corresponding route
    navigate('/homeservices')
  }

  // Render the filtered content

  return (
    <div className="flex w-full flex-col gap-16">
      <div className=" flex w-full items-center justify-center">
        <div className=" flex w-[80%] flex-col items-center justify-center gap-5">
          <div className="ml-6 w-full gap-3 border-b border-gray-400 text-4xl font-bold tracking-wide">
            <p>Dialkro's Home Services</p>
          </div>
          <div className="grid items-center justify-center gap-4 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <BigSubCards
              images={'/homeservice/refrigerator.webp'}
              title={'Refrigerator'}
              onClick={() => navigate('/refrigeratorCategories')}
            />
            <BigSubCards
              images={'/homeservice/tv.webp'}
              title={`TV and LED's`}
              onClick={() => navigate('/refrigeratorCategories')}
            />
            <BigSubCards
              images={'/homeservice/chimney.webp'}
              title={'Chimney'}
              onClick={() => navigate('/refrigeratorCategories')}
            />
            <BigSubCards
              images={'/homeservice/RO.webp'}
              title={'RO/Water Purifier'}
              onClick={() => navigate('/refrigeratorCategories')}
            />
            <BigSubCards
              images={'/homeservice/pestcontrol.webp'}
              title={'Pest Control'}
              onClick={() => navigate('/refrigeratorCategories')}
            />
            <BigSubCards
              images={'/homeservice/kitchen.webp'}
              title={'Kitchen'}
              onClick={() => navigate('/refrigeratorCategories')}
            />
          </div>
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
