import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'

const OnlineShoppingpg_1 = () => {
  return (
    <>
      <Nav />
      <div className=" flex cursor-pointer items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
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
          prompt={'Personal & Baby Care'}
          image={'/onlineshoppingCarousel/babycare 1.png'}
          options={[
            'Soaps & Baby Wash',
            'Hair Care',
            'Oral Care',
            'Deos, Perfumes & Talcum Powder',
            'Creams, Lotions, Skincare',
            'Kajal'
          ]}
        />
      </div>
      <div className="flex items-center justify-center">
        <img src="/onlineshoppingCarousel/img.svg" alt="alt" />
      </div>

      <Footer />
    </>
  )
}

export default OnlineShoppingpg_1
