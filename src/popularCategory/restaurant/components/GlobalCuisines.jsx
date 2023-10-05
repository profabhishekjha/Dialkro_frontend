import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import DropdownMenu from '../../../OnlineShopping/components/DropdownComponent'

const GlobalCuisines = () => {
  return (
    <>
      <Nav services={'Global'} />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Chinese'}
          image={'/Restaurant/global cusines/chinese-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/japanese-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/italian-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/mexican-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/thai-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/mediterranean-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/french-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/greek-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/spanish-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/indian-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/middle-eastern-cuisine.PNG'}
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
          image={'/Restaurant/global cusines/korean-cuisine.PNG'}
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
      <div className="my-28  flex items-center justify-center">
        <img src="/Restaurant/global cusines/frames/Frame 12.svg" alt="alt" className="mt-20" />
      </div>

      <Footer />
    </>
  )
}

export default GlobalCuisines
