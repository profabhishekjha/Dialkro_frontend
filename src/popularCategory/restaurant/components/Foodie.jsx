import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import DropdownMenu from '../../../OnlineShopping/components/DropdownComponent'

const Foodie = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Dhabas'}
          image={'/onlineshoppingCarousel/dhabas.png'}
          options={[
            'Local Dhabas',
            'Highway Dhabas',
            'Traditional Cuisine',
            'Outdoor Seating',
            'Regional Specialties',
            'Authentic Flavors'
          ]}
        />

        <DropdownMenu
          prompt={'Fine Dining'}
          image={'/onlineshoppingCarousel/fine-dining.png'}
          options={[
            'Michelin Star Restaurants',
            'Gourmet Dining',
            'Tasting Menus',
            'Wine Pairing',
            'Elegant Ambiance',
            'Luxury Dining'
          ]}
        />

        <DropdownMenu
          prompt={'Food Trucks'}
          image={'/onlineshoppingCarousel/food-trucks.png'}
          options={[
            'Street Food Trucks',
            'Food Truck Festivals',
            'Global Cuisines',
            'Quick Bites',
            'Local Favorites'
          ]}
        />

        <DropdownMenu
          prompt={'Farm-to-Table'}
          image={'/onlineshoppingCarousel/farm-to-table.png'}
          options={[
            'Organic Ingredients',
            'Locally Sourced',
            'Seasonal Menus',
            'Sustainable Dining',
            'Fresh and Healthy',
            'Farm-to-Glass Drinks'
          ]}
        />

        <DropdownMenu
          prompt={'Food Festivals'}
          image={'/onlineshoppingCarousel/food-festivals.png'}
          options={[
            'Cultural Food Festivals',
            'Street Food Festivals',
            'International Flavors',
            'Food and Wine Festivals',
            'Live Cooking Demos',
            'Taste the World'
          ]}
        />

        <DropdownMenu
          prompt={'Pop-Up Restaurants'}
          image={'/onlineshoppingCarousel/pop-up-restaurants.png'}
          options={[
            'Unique Dining Experiences',
            'Limited-Time Menus',
            'Hidden Gems',
            'Artistic Settings',
            'Experimental Cuisine',
            'Foodie Gatherings'
          ]}
        />

        <DropdownMenu
          prompt={'Gourmet Cuisine'}
          image={'/onlineshoppingCarousel/gourmet-cuisine.png'}
          options={[
            'Exquisite Flavors',
            'Artfully Plated Dishes',
            `Chef's Creations`,
            'Luxury Ingredients',
            'Multi-Course Meals',
            'Elevated Dining'
          ]}
        />

        <DropdownMenu
          prompt={"Chef's Specials"}
          image={'/onlineshoppingCarousel/chefs-specials.png'}
          options={[
            'Signature Dishes',
            `Chef's Recommendations`,
            'Limited-Edition Menus',
            'Creative Culinary Delights',
            'Unforgettable Tastes'
          ]}
        />

        <DropdownMenu
          prompt={'Unique Eateries'}
          image={'/onlineshoppingCarousel/unique-eateries.png'}
          options={[
            'Unconventional Dining',
            'Quirky Themes',
            'Hidden Restaurants',
            'Offbeat Menus',
            'Memorable Experiences'
          ]}
        />

        <DropdownMenu
          prompt={'Tasting Menus'}
          image={'/onlineshoppingCarousel/tasting-menus.png'}
          options={[
            `Chef's Tasting Menus`,
            'Wine and Food Pairing',
            'Degustation Menus',
            'Explorative Dining',
            'Culinary Adventures'
          ]}
        />

        <DropdownMenu
          prompt={'Culinary Experiences'}
          image={'/onlineshoppingCarousel/culinary-experiences.png'}
          options={[
            'Cooking Classes',
            'Food and Wine Tours',
            'Farm Visits',
            'Interactive Dining',
            'Hands-On Cooking',
            'Foodie Workshops'
          ]}
        />

        <DropdownMenu
          prompt={'Foodie Tours'}
          image={'/onlineshoppingCarousel/foodie-tours.png'}
          options={[
            'Culinary Adventures',
            'Local Food Tours',
            'Gastronomic Explorations',
            'Taste the City',
            'Hidden Culinary Gems',
            'Food and History'
          ]}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/frames/Frame 12.svg" alt="alt" className="mt-20" />
      </div>

      <Footer />
    </>
  )
}

export default Foodie
