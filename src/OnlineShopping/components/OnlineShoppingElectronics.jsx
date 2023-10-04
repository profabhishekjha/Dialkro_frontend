import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'

const OnlineShoppingElectronics = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Mobile Phones'}
          image={'/onlineshoppingCarousel/phone.PNG'}
          options={['Smartphones', 'Feature Phones', 'Accessories']}
        />

        <DropdownMenu
          prompt={'Laptops & Computers'}
          image={'/onlineshoppingCarousel/laptop.PNG'}
          options={['Laptops', 'Desktops', 'Monitors', 'Computer Accessories']}
        />

        <DropdownMenu
          prompt={'Audio & Headphones'}
          image={'/onlineshoppingCarousel/headphones.PNG'}
          options={['Headphones', 'Earphones', 'Speakers', 'Home Audio', 'Audio Accessories']}
        />

        <DropdownMenu
          prompt={'Cameras & Photography'}
          image={'/onlineshoppingCarousel/camera.PNG'}
          options={['Digital Cameras', 'DSLR Cameras', 'Camera Accessories']}
        />

        <DropdownMenu
          prompt={'Home Appliances'}
          image={'/onlineshoppingCarousel/home-appliances.PNG'}
          options={[
            'Refrigerators',
            'Washing Machines',
            'Microwaves',
            'Air Conditioners',
            'Home Appliance Accessories'
          ]}
        />

        <DropdownMenu
          prompt={'Gaming Consoles & Accessories'}
          image={'/onlineshoppingCarousel/gaming-console.PNG'}
          options={['Gaming Consoles', 'Video Games', 'Gaming Accessories']}
        />

        <DropdownMenu
          prompt={'Wearable Technology'}
          image={'/onlineshoppingCarousel/wearables.PNG'}
          options={['Smartwatches', 'Fitness Trackers', 'Wearable Accessories']}
        />

        <DropdownMenu
          prompt={'Smart Home & IoT'}
          image={'/onlineshoppingCarousel/iot.PNG'}
          options={['Smart Speakers', 'Smart Cameras', 'Smart Lights', 'IoT Accessories']}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/frames/Frame 10.svg" alt="alt" className="mt-20" />
      </div>

      <Footer />
    </>
  )
}

export default OnlineShoppingElectronics
