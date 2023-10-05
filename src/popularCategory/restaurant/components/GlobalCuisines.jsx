import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import DropdownMenu from '../../../OnlineShopping/components/DropdownComponent'

const GlobalCuisines = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Chinese'}
          image={'/onlineshoppingCarousel/chinese-cuisine.png'}
          options={[
            'Szechuan',
            'Cantonese',
            'Hunan',
            'Dim Sum',
            'Peking Duck',
            'Hot Pot',
            'Noodles',
            'Vegetarian Options',
            'Chinese Desserts'
          ]}
        />

        <DropdownMenu
          prompt={'Japanese'}
          image={'/onlineshoppingCarousel/japanese-cuisine.png'}
          options={[
            'Sushi',
            'Sashimi',
            'Tempura',
            'Ramen',
            'Izakaya',
            'Teppanyaki',
            'Japanese Curry',
            'Matcha Desserts',
            'Mochi'
          ]}
        />

        <DropdownMenu
          prompt={'Italian'}
          image={'/onlineshoppingCarousel/italian-cuisine.png'}
          options={[
            'Pasta',
            'Pizza',
            'Lasagna',
            'Risotto',
            'Gelato',
            'Tiramisu',
            'Italian Coffee',
            'Antipasti',
            'Italian Desserts'
          ]}
        />

        <DropdownMenu
          prompt={'Mexican'}
          image={'/onlineshoppingCarousel/mexican-cuisine.png'}
          options={[
            'Tacos',
            'Burritos',
            'Enchiladas',
            'Guacamole',
            'Salsas',
            'Chiles Rellenos',
            'Mexican Street Food',
            'Churros',
            'Mexican Desserts'
          ]}
        />

        <DropdownMenu
          prompt={'Thai'}
          image={'/onlineshoppingCarousel/thai-cuisine.png'}
          options={[
            'Pad Thai',
            'Tom Yum',
            'Green Curry',
            'Som Tum',
            'Thai Noodles',
            'Thai Soups',
            'Mango Sticky Rice',
            'Thai Desserts'
          ]}
        />

        <DropdownMenu
          prompt={'Mediterranean'}
          image={'/onlineshoppingCarousel/mediterranean-cuisine.png'}
          options={[
            'Hummus',
            'Falafel',
            'Kebabs',
            'Greek Salad',
            'Tabbouleh',
            'Baba Ganoush',
            'Mediterranean Desserts',
            'Greek Yogurt'
          ]}
        />

        <DropdownMenu
          prompt={'French'}
          image={'/onlineshoppingCarousel/french-cuisine.png'}
          options={[
            'Croissants',
            'Escargot',
            'Coq au Vin',
            'Quiche',
            'Ratatouille',
            'Macarons',
            'French Cheese',
            'French Desserts'
          ]}
        />

        <DropdownMenu
          prompt={'Greek'}
          image={'/onlineshoppingCarousel/greek-cuisine.png'}
          options={[
            'Gyros',
            'Moussaka',
            'Greek Salad',
            'Tzatziki',
            'Spanakopita',
            'Baklava',
            'Greek Yogurt',
            'Greek Desserts'
          ]}
        />

        <DropdownMenu
          prompt={'Spanish'}
          image={'/onlineshoppingCarousel/spanish-cuisine.png'}
          options={[
            'Paella',
            'Tapas',
            'Churros',
            'Gazpacho',
            'Sangria',
            'Spanish Omelette',
            'Spanish Desserts',
            'Flan'
          ]}
        />

        <DropdownMenu
          prompt={'Indian'}
          image={'/onlineshoppingCarousel/indian-cuisine.png'}
          options={[
            'Curry',
            'Biryani',
            'Tandoori',
            'Masala Dosa',
            'Samosas',
            'Chaat',
            'Indian Sweets',
            'Indian Desserts'
          ]}
        />

        <DropdownMenu
          prompt={'Middle Eastern'}
          image={'/onlineshoppingCarousel/middle-eastern-cuisine.png'}
          options={[
            'Hummus',
            'Falafel',
            'Shawarma',
            'Kebabs',
            'Baklava',
            'Middle Eastern Sweets',
            'Tahini',
            'Middle Eastern Desserts'
          ]}
        />

        <DropdownMenu
          prompt={'Korean'}
          image={'/onlineshoppingCarousel/korean-cuisine.png'}
          options={[
            'Kimchi',
            'Bulgogi',
            'Bibimbap',
            'Tteokbokki',
            'Korean BBQ',
            'Korean Noodles',
            'Korean Pancakes',
            'Korean Desserts'
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

export default GlobalCuisines
