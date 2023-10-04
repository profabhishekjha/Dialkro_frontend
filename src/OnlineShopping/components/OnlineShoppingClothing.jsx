import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'

const OnlineShoppingClothing = () => {
  return (
    <>
      <Nav services={`Fashion`} />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={"Men's Clothing"}
          image={'/onlineshoppingCarousel/menswear.PNG'}
          options={[
            'T-Shirts',
            'Shirts',
            'Jeans',
            'Trousers',
            'Suits',
            'Jackets',
            'Sweaters',
            'Activewear',
            'Sleepwear'
          ]}
        />

        <DropdownMenu
          prompt={"Women's Clothing"}
          image={'/onlineshoppingCarousel/womenswear.PNG'}
          options={[
            'Dresses',
            'Tops',
            'Bottoms',
            'Outerwear',
            'Swimwear',
            'Activewear',
            'Lingerie',
            'Sleepwear'
          ]}
        />

        <DropdownMenu
          prompt={"Kids' Clothing"}
          image={'/onlineshoppingCarousel/kidswear.PNG'}
          options={["Boys' Clothing", "Girls' Clothing", 'Baby Clothing', 'Accessories']}
        />

        <DropdownMenu
          prompt={'Footwear'}
          image={'/onlineshoppingCarousel/footwear.PNG'}
          options={[
            "Men's Shoes",
            "Women's Shoes",
            "Kids' Shoes",
            'Sports Shoes',
            'Casual Shoes',
            'Boots',
            'Sandals',
            'Slippers'
          ]}
        />

        <DropdownMenu
          prompt={'Accessories'}
          image={'/onlineshoppingCarousel/watches.PNG'}
          options={[
            'Bags',
            'Watches',
            'Jewelry',
            'Hats',
            'Sunglasses',
            'Belts',
            'Scarves',
            'Gloves'
          ]}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/frames/Frame 9.svg" alt="alt" className="mt-20" />
      </div>

      <Footer />
    </>
  )
}

export default OnlineShoppingClothing
