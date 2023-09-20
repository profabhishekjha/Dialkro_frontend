import React from 'react'
import Nav from '../../src/components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../src/components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../src/components/Body/Carousel/BannerCarousel'
import CardSectionshop from './components/cardSectionshop'
const Autocare = () => {
  const navigate = useNavigate()

  const category = 'autocare' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSectionshop onClick={() => navigate('/autocare/Product_Detail')} />
        <CardSectionshop onClick={() => navigate('/autocare/Product_Detail')} />
        <CardSectionshop onClick={() => navigate('/autocare/Product_Detail')} />
        <CardSectionshop onClick={() => navigate('/autocare/Product_Detail')} />
        <CardSectionshop onClick={() => navigate('/autocare/Product_Detail')} />
      </div>
      <Footer />
    </div>
  )
}

export default Autocare
