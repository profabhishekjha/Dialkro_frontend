import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const CarCarePage = () => {
  const car = 'car'

  const images = [
    `Hero_pg1/Repairs/carCarousel/car (1).webp`,
    `Hero_pg1/Repairs/${car}Carousel/${car} (2).webp`,
    `Hero_pg1/Repairs/${car}Carousel/${car} (3).webp`,
    `Hero_pg1/Repairs/${car}Carousel/${car} (4).webp`,
    `Hero_pg1/Repairs/${car}Carousel/${car} (5).webp`
  ]

  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />

      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection onClick={() => navigate('/carCare/Product_Detail')} />
        <CardSection onClick={() => navigate('/carCare/Product_Detail')} />
        <CardSection onClick={() => navigate('/carCare/Product_Detail')} />
        <CardSection onClick={() => navigate('/carCare/Product_Detail')} />
        <CardSection onClick={() => navigate('/carCare/Product_Detail')} />
        <CardSection onClick={() => navigate('/carCare/Product_Detail')} />
      </div>
      <Footer />
    </div>
  )
}

export default CarCarePage
