import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import DropdownMenu from '../../../OnlineShopping/components/DropdownComponent'

const Dessert = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Cakes'}
          image={'/onlineshoppingCarousel/cakes.png'}
          options={[
            'Chocolate Cake',
            'Vanilla Cake',
            'Red Velvet Cake',
            'Cheesecake',
            'Carrot Cake',
            'Fruit Cake',
            'Cupcakes',
            'Custom Cakes',
            'Cake Decorating'
          ]}
        />
        <DropdownMenu
          prompt={'Ice Cream'}
          image={'/onlineshoppingCarousel/ice-cream.png'}
          options={[
            'Vanilla',
            'Chocolate',
            'Strawberry',
            'Mint Chocolate Chip',
            'Cookies and Cream',
            'Gelato',
            'Sorbet',
            'Ice Cream Sundaes',
            'Ice Cream Toppings'
          ]}
        />
        <DropdownMenu
          prompt={'Pies & Pastries'}
          image={'/onlineshoppingCarousel/pies-pastries.png'}
          options={[
            'Apple Pie',
            'Cherry Pie',
            'Pecan Pie',
            'Key Lime Pie',
            'Danish Pastries',
            'Custard Tarts',
            'Baklava',
            'Puff Pastry',
            'Pie Crusts'
          ]}
        />

        <DropdownMenu
          prompt={'Cookies'}
          image={'/onlineshoppingCarousel/cookies.png'}
          options={[
            'Chocolate Chip Cookies',
            'Oatmeal Cookies',
            'Sugar Cookies',
            'Peanut Butter Cookies',
            'Snickerdoodles',
            'Shortbread Cookies',
            'Biscotti',
            'Cookie Decorating',
            'Cookie Cutters'
          ]}
        />
        <DropdownMenu
          prompt={'Chocolates'}
          image={'/onlineshoppingCarousel/chocolates.png'}
          options={[
            'Dark Chocolate',
            'Milk Chocolate',
            'White Chocolate',
            'Truffles',
            'Chocolate Bars',
            'Chocolate Fondue',
            'Chocolate Gifts',
            'Chocolate Making'
          ]}
        />
        <DropdownMenu
          prompt={'Puddings'}
          image={'/onlineshoppingCarousel/puddings.png'}
          options={[
            'Chocolate Pudding',
            'Vanilla Pudding',
            'Rice Pudding',
            'Bread Pudding',
            'Tapioca Pudding',
            'Butterscotch Pudding',
            'Pudding Cups',
            'Homemade Pudding'
          ]}
        />
        <DropdownMenu
          prompt={'Fruit Desserts'}
          image={'/onlineshoppingCarousel/fruit-desserts.png'}
          options={[
            'Fruit Salad',
            'Fruit Tarts',
            'Fruit Compote',
            'Fruit Crumble',
            'Fruit Parfaits',
            'Fruit Sorbet',
            'Fruit Pizza',
            'Fruit Smoothies'
          ]}
        />

        <DropdownMenu
          prompt={'Custards'}
          image={'/onlineshoppingCarousel/custards.png'}
          options={[
            'Crème Brûlée',
            'Flan',
            'Tapioca Pudding',
            'Custard Tarts',
            'Custard Pie',
            'Custard Cups',
            'Custard Sauces',
            'Homemade Custard'
          ]}
        />
        <DropdownMenu
          prompt={'Gelato'}
          image={'/onlineshoppingCarousel/gelato.png'}
          options={[
            'Chocolate Gelato',
            'Vanilla Gelato',
            'Stracciatella',
            'Pistachio Gelato',
            'Fruit Gelato',
            'Gelato Sundaes',
            'Gelato Cones',
            'Gelato Machines'
          ]}
        />
        <DropdownMenu
          prompt={'Sorbet'}
          image={'/onlineshoppingCarousel/sorbet.png'}
          options={[
            'Fruit Sorbet',
            'Lemon Sorbet',
            'Raspberry Sorbet',
            'Mango Sorbet',
            'Sorbetto',
            'Sorbet Cocktails',
            'Sorbet Maker',
            'Homemade Sorbet'
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

export default Dessert
