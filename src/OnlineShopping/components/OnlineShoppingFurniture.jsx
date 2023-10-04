import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'

const OnlineShoppingFurniture = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Seating Furniture'}
          image={'/onlineshoppingCarousel/chairs.PNG'}
          options={['Chairs', 'Sofas', 'Benches', 'Stools']}
        />

        <DropdownMenu
          prompt={'Tables'}
          image={'/onlineshoppingCarousel/desk.PNG'}
          options={[
            'Dining Tables',
            'Coffee Tables',
            'End Tables',
            'Console Tables',
            'Desks',
            'Nightstands'
          ]}
        />

        <DropdownMenu
          prompt={'Storage Furniture'}
          image={'/onlineshoppingCarousel/storage.PNG'}
          options={['Cabinets', 'Dressers', 'Wardrobes', 'Bookshelves', 'Buffets and Sideboards']}
        />

        <DropdownMenu
          prompt={'Beds'}
          image={'/onlineshoppingCarousel/beds.PNG'}
          options={[
            'Bed Frames',
            'Mattresses',
            'Headboards and Footboards',
            'Bunk Beds',
            'Canopy Beds'
          ]}
        />

        <DropdownMenu
          prompt={'Outdoor Furniture'}
          image={'/onlineshoppingCarousel/bench.PNG'}
          options={['Patio Sets', 'Outdoor Sofas', 'Sun Loungers', 'Adirondack Chairs', 'Hammocks']}
        />

        <DropdownMenu
          prompt={"Children's Furniture"}
          image={'/onlineshoppingCarousel/craddle.PNG'}
          options={['Cribs', 'Changing Tables', "Kids' Beds", 'Playroom Furniture']}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/frames/Frame 12.svg" alt="alt" className="mt-20" />
      </div>

      <Footer />
    </>
  )
}

export default OnlineShoppingFurniture
