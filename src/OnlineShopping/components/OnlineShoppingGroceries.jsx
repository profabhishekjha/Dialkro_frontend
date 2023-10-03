import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'

const OnlineShoppingGroceries = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-wrap  items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Staples'}
          image={'/onlineshoppingCarousel/grocery 1.png'}
          options={[
            'Dals & Pulses',
            'Ghee & Oils',
            'Aata Besan & Sooji',
            'Masalas',
            'Rice Products',
            'Dry Fruits and Seeds',
            'Sugar, Jaggery & Salt'
          ]}
        />

        <DropdownMenu
          prompt={'Packaged Foods'}
          image={'/onlineshoppingCarousel/packaged 1.png'}
          options={[
            'Breakfast Cereals',
            'Noodles & Pasta',
            'Ketchups & Spreads',
            'Chocolates & Sweets',
            'Jams & Honey',
            'Pickles & Chutney',
            'Ready to Cook',
            'Vinegar',
            'Baking Powder'
          ]}
        />
        <DropdownMenu
          prompt={'Snacks & Beverage'}
          image={'/onlineshoppingCarousel/snacks 1.png'}
          options={[
            'Biscuits',
            'Chips, Namkeen & Snacks',
            'Tea & Coffee',
            'Juices',
            'Health Drink Mix',
            'Soft Drinks',
            'Instant Drinks Mixes',
            'Squash & Syrups',
            'Water'
          ]}
        />
        <DropdownMenu
          prompt={'Daily Needs'}
          image={'/onlineshoppingCarousel/dialy-needs.PNG'}
          options={['Soaps & Baby Wash', 'Butter', 'Eggs', 'Hair Care', 'Oral Care']}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/img.svg" alt="alt" />
      </div>

      <Footer />
    </>
  )
}

export default OnlineShoppingGroceries
