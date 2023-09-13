import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const ElectronicServicesPage = () => {
  const electronics = 'electronics'

  const images = [
    `Hero_pg1/Repairs/${electronics}Carousel/${electronics} (1).webp`,
    `Hero_pg1/Repairs/${electronics}Carousel/${electronics} (2).webp`,
    `Hero_pg1/Repairs/${electronics}Carousel/${electronics} (3).webp`,
    `Hero_pg1/Repairs/${electronics}Carousel/${electronics} (4).webp`,
    `Hero_pg1/Repairs/${electronics}Carousel/${electronics} (5).webp`,
    `Hero_pg1/Repairs/${electronics}Carousel/${electronics} (6).webp`,
    `Hero_pg1/Repairs/${electronics}Carousel/${electronics} (7).webp`
  ]

  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />

      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} />
        <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} />
        <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} />
        <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} />
        <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} />
        <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} />
      </div>
      <Footer />
    </div>
  )
}

export default ElectronicServicesPage
