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
    `CarCarousel/${car} (1).webp`,
    `CarCarousel/${car} (2).webp`,
    `CarCarousel/${car} (3).webp`,
    `CarCarousel/${car} (4).webp`,
    `CarCarousel/${car} (5).webp`
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
