import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import DropdownMenu from '../../../OnlineShopping/components/DropdownComponent'

const QuickBites = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Street Food'}
          image={'/onlineshoppingCarousel/street-food.png'}
          options={[
            'Food Carts',
            'Food Stalls',
            'Street Vendors',
            'Global Street Food',
            'Street Snacks',
            'Street Food Markets',
            'Food Truck Festivals',
            'Street Food Tours'
          ]}
        />

        <DropdownMenu
          prompt={'Burgers'}
          image={'/onlineshoppingCarousel/burgers.png'}
          options={[
            'Classic Burgers',
            'Gourmet Burgers',
            'Veggie Burgers',
            'Chicken Burgers',
            'Sliders',
            'Burger Joints',
            'Burger Toppings',
            'Burger Recipes'
          ]}
        />

        <DropdownMenu
          prompt={'Pizza'}
          image={'/onlineshoppingCarousel/pizza.png'}
          options={[
            'Margherita Pizza',
            'Pepperoni Pizza',
            'Hawaiian Pizza',
            'Vegetarian Pizza',
            'Pizza Toppings',
            'Pizza Places',
            'Pizza Delivery',
            'Homemade Pizza'
          ]}
        />

        <DropdownMenu
          prompt={'Tacos'}
          image={'/onlineshoppingCarousel/tacos.png'}
          options={[
            'Street Tacos',
            'Taco Trucks',
            'Taco Stands',
            'Taco Tuesday',
            'Taco Fillings',
            'Taco Varieties',
            'Homemade Tacos',
            'Taco Recipes'
          ]}
        />

        <DropdownMenu
          prompt={'Hot Dogs'}
          image={'/onlineshoppingCarousel/hot-dogs.png'}
          options={[
            'Classic Hot Dogs',
            'Gourmet Hot Dogs',
            'Chili Dogs',
            'Veggie Dogs',
            'Hot Dog Toppings',
            'Hot Dog Stands',
            'Homemade Hot Dogs',
            'Hot Dog Recipes'
          ]}
        />

        <DropdownMenu
          prompt={'Sandwiches'}
          image={'/onlineshoppingCarousel/sandwiches.png'}
          options={[
            'Sub Sandwiches',
            'Paninis',
            'Grilled Cheese',
            'Club Sandwiches',
            'Wrap Sandwiches',
            'Sandwich Fillings',
            'Homemade Sandwiches',
            'Sandwich Recipes'
          ]}
        />

        <DropdownMenu
          prompt={'Wraps'}
          image={'/onlineshoppingCarousel/wraps.png'}
          options={[
            'Chicken Wraps',
            'Veggie Wraps',
            'Greek Gyro Wraps',
            'Falafel Wraps',
            'Wrap Fillings',
            'Homemade Wraps',
            'Wrap Recipes'
          ]}
        />

        <DropdownMenu
          prompt={'Pasta'}
          image={'/onlineshoppingCarousel/pasta.png'}
          options={[
            'Spaghetti',
            'Fettuccine Alfredo',
            'Lasagna',
            'Penne',
            'Pasta Sauces',
            'Italian Pasta',
            'Pasta Recipes'
          ]}
        />

        <DropdownMenu
          prompt={'Sushi'}
          image={'/onlineshoppingCarousel/sushi.png'}
          options={[
            'Sashimi',
            'Maki Rolls',
            'Nigiri',
            'California Rolls',
            'Sushi Platters',
            'Sushi Bars',
            'Homemade Sushi',
            'Sushi Recipes'
          ]}
        />

        <DropdownMenu
          prompt={'Fries'}
          image={'/onlineshoppingCarousel/fries.png'}
          options={[
            'French Fries',
            'Sweet Potato Fries',
            'Curly Fries',
            'Waffle Fries',
            'Loaded Fries',
            'Fry Dipping Sauces',
            'Homemade Fries',
            'Fry Recipes'
          ]}
        />

        <DropdownMenu
          prompt={'Chicken Wings'}
          image={'/onlineshoppingCarousel/chicken-wings.png'}
          options={[
            'BBQ Wings',
            'Honey Mustard Wings',
            'Garlic Parmesan Wings',
            'Spicy Wings',
            'Boneless Wings',
            'Homemade Wings',
            'Wing Recipes'
          ]}
        />

        <DropdownMenu
          prompt={'Tandoori'}
          image={'/onlineshoppingCarousel/tandoori.png'}
          options={[
            'Tandoori Chicken',
            'Tandoori Naan',
            'Tandoori Paneer',
            'Tandoori Roti',
            'Tandoori Fish',
            'Tandoori Grill',
            'Homemade Tandoori',
            'Tandoori Recipes'
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

export default QuickBites
